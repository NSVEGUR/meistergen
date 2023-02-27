import catchAsync from '../../utils/catchAsync.util';
import { NextFunction, Request, Response } from 'express';
import ServiceRequest from '../../services/user/serviceRequest.service';

const applyService = catchAsync(async function (req: Request, res: Response, next: NextFunction) {
  const { letter } = req.body;
  const files = req.files as Express.Multer.File[];
  const fileNames = await ServiceRequest.create(req.user.id, req.service.id, files, letter);
  res.status(201).json({
    status: 201,
    message: 'Applied to the service',
    data: {
      files: fileNames
    }
  });
});

const getApplied = catchAsync(async function (req: Request, res: Response, next: NextFunction) {
  const appliedServices = await ServiceRequest.getAll(req.user.id, false);
  res.status(200).json({
    status: 200,
    message: 'Fetched applied services successfully',
    data: {
      count: appliedServices.length,
      services: appliedServices
    }
  });
});

const getApproved = catchAsync(async function (req: Request, res: Response, next: NextFunction) {
  const approvedServices = await ServiceRequest.getAll(req.user.id, true);
  res.status(200).json({
    status: 200,
    message: 'Fetched approved services successfully',
    data: {
      count: approvedServices.length,
      services: approvedServices
    }
  });
});

const getAvailable = catchAsync(async function (req: Request, res: Response, next: NextFunction) {
  const availableServices = await ServiceRequest.getAvailable(req.user.id);
  res.status(200).json({
    status: 200,
    message: 'Fetched available services successfully',
    data: {
      count: availableServices.length,
      services: availableServices
    }
  });
});

const getAll = catchAsync(async function (req: Request, res: Response, next: NextFunction) {
  const appliedServices = await ServiceRequest.getAll(req.user.id, false);
  const approvedServices = await ServiceRequest.getAll(req.user.id, true);
  const availableServices = await ServiceRequest.getAvailable(req.user.id);
  res.status(200).json({
    status: 200,
    message: 'Fetched all services successfully',
    data: {
      services: {
        applied: appliedServices,
        approved: approvedServices,
        available: availableServices
      }
    }
  });
});

export default {
  applyService,
  getApplied,
  getApproved,
  getAvailable,
  getAll
};
