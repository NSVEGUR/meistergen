import catchAsync from '../../utils/catchAsync.util';
import { NextFunction, Request, Response } from 'express';
import AppError from '../../utils/appError.util';
import Crypto from '../../utils/crypto.util';
import prismaExclude from '../../utils/prismaExclude.util';

import prisma from '../../../prisma';
import puppeteer from 'puppeteer';
import config from '../../config';

const applyService = catchAsync(async function (
	req: Request,
	res: Response,
	next: NextFunction
) {
	const { letter } = req.body;
	const files = req.files as Express.Multer.File[];
	if (!files && !letter)
		return next(
			new AppError('Please let us know about yourself', 400)
		);
	const userService = await prisma.serviceRequest.create({
		data: {
			uid: Crypto.crypticRandomBytes(),
			userId: req.user.id,
			serviceId: req.service.id
		}
	});
	let data = files.map((file) => {
		return {
			uid: file.filename,
			name: file.originalname,
			mimetype: file.mimetype,
			size: file.size,
			authorId: userService.id
		};
	});
	if (letter) {
		const browser = await puppeteer.launch({
			headless: true
		});
		const page = await browser.newPage();
		await page.setContent(letter);
		const fileName = `${req.user.id}$${Date.now()}.pdf`;
		const buffer = await page.pdf({
			format: 'A4',
			path: `${config.FILE_STORE}/${fileName}`
		});
		await browser.close();
		data.push({
			uid: fileName,
			name: 'letter.pdf',
			mimetype: 'application/pdf',
			size: Buffer.byteLength(buffer),
			authorId: userService.id
		});
	}
	const newFiles = await prisma.file.createMany({
		data
	});
	if (!newFiles)
		return next(
			new AppError('Error in creating files', 400)
		);
	const fileNames = data.map((file) => file.name);
	res.status(201).json({
		status: 201,
		message: 'Applied to the service',
		data: {
			files: fileNames
		}
	});
});

const getPersonal = catchAsync(async function (
	req: Request,
	res: Response,
	next: NextFunction
) {
	const serviceRequests =
		await prisma.serviceRequest.findMany({
			where: {
				userId: req.user.id,
				approved: true
			},
			select: {
				uid: true,
				service: true
			}
		});
	const requests = serviceRequests.map((request) => {
		return {
			uid: request.uid,
			service: prismaExclude(request.service, ['id'])
		};
	});
	res.status(200).json({
		status: 200,
		message: 'Fetched approved services successfully',
		data: {
			count: requests.length,
			requests
		}
	});
});

const getAvailable = catchAsync(async function (
	req: Request,
	res: Response,
	next: NextFunction
) {
	const serviceRequests = (
		await prisma.serviceRequest.findMany({
			where: {
				userId: req.user.id,
				approved: true
			},
			select: {
				serviceId: true
			}
		})
	).map((request) => request.serviceId);
	const services = await prisma.service.findMany();
	const filteredServices = services.filter(
		(service) => !serviceRequests.includes(service.id)
	);
	const availableServices = filteredServices.map(
		(service) => prismaExclude(service, ['id'])
	);
	res.status(200).json({
		status: 200,
		message: 'Fetched available services successfully',
		data: {
			count: availableServices.length,
			services: availableServices
		}
	});
});

const getAll = catchAsync(async function (
	req: Request,
	res: Response,
	next: NextFunction
) {
	const serviceRequests =
		await prisma.serviceRequest.findMany({
			where: {
				userId: req.user.id,
				approved: true
			},
			select: {
				uid: true,
				service: true
			}
		});
	const approvedIds = serviceRequests.map(
		(request) => request.service.id
	);
	const requests = serviceRequests.map((request) => {
		return {
			uid: request.uid,
			service: prismaExclude(request.service, ['id'])
		};
	});
	const services = await prisma.service.findMany();
	const filteredServices = services.filter(
		(service) => !approvedIds.includes(service.id)
	);
	const availableServices = filteredServices.map(
		(service) => prismaExclude(service, ['id'])
	);
	res.status(200).json({
		status: 200,
		message: 'Fetched all services successfully',
		data: {
			requests: {
				approved: requests,
				available: availableServices
			}
		}
	});
});

const getService = catchAsync(async function (
	req: Request,
	res: Response,
	next: NextFunction
) {
	const request = await prisma.serviceRequest.findUnique({
		where: {
			id: req.serviceRequest.id
		},
		select: {
			uid: true,
			files: {
				select: {
					name: true,
					uid: true
				}
			},
			service: {
				select: {
					name: true,
					description: true
				}
			}
		}
	});
	res.status(200).json({
		status: 200,
		message: 'Fetched service successfully',
		data: request
	});
});

export default {
	applyService,
	getPersonal,
	getAvailable,
	getAll,
	getService
};
