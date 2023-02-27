import puppeteer from 'puppeteer';
import { prisma } from '../../server';
import prismaExclude from '../../utils/prismaExclude.util';
import config from '../../config';

const create = async function (
  userId: number,
  serviceId: number,
  files: Express.Multer.File[],
  letter: any
) {
  const userService = await prisma.serviceRequest.create({
    data: {
      userId,
      serviceId
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
    const fileName = `${userId}$${serviceId}$${Date.now()}.pdf`;
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
  return data.map((file) => file.name);
};

const getAll = async function (id: number, approved: boolean) {
  const serviceRequests = await prisma.serviceRequest.findMany({
    where: {
      userId: id,
      approved
    },
    select: {
      service: true
    }
  });
  return serviceRequests
    .map((request) => request.service)
    .map((service) => prismaExclude(service, ['id']));
};

const getAvailable = async function (id: number) {
  const serviceRequests = (
    await prisma.serviceRequest.findMany({
      where: {
        userId: id
      },
      select: {
        serviceId: true
      }
    })
  ).map((request) => request.serviceId);
  const services = await prisma.service.findMany();
  const availableServices = services.filter((service) => !serviceRequests.includes(service.id));
  return availableServices.map((service) => prismaExclude(service, ['id']));
};

export default {
  create,
  getAll,
  getAvailable
};
