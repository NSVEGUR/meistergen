import { NextFunction, Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync.util';
import serviceRequest from '../../services/employee/serviceRequest.service';
import AppError from '../../utils/appError.util';
import AuthService from '../../services/auth.service';

const getServiceRequests = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const requests = await serviceRequest.getAll();
  res.status(200).json({
    status: 200,
    message: 'Fetched service requests successfully',
    data: {
      requests
    }
  });
});

const getServiceRequest = catchAsync(async function (
  req: Request<{}, {}, { email: string }>,
  res: Response,
  next: NextFunction
) {
  const request = await serviceRequest.get(req.serviceRequest.id);
  res.status(200).json({
    status: 200,
    message: 'Fetched service request successfully',
    data: {
      request
    }
  });
});

const approveServiceRequest = catchAsync(async function (
  req: Request<{}, {}, { email: string }>,
  res: Response,
  next: NextFunction
) {
  const request = await serviceRequest.conclude(req.serviceRequest.id, req.user.id, true);
  res.status(200).json({
    status: 200,
    message: 'Approved service request successfully',
    data: {
      request
    }
  });
});

const declineServiceRequest = catchAsync(async function (
  req: Request<{}, {}, { email: string }>,
  res: Response,
  next: NextFunction
) {
  const request = await serviceRequest.conclude(req.serviceRequest.id, req.user.id, false);
  res.status(200).json({
    status: 200,
    message: 'Declined service request successfully',
    data: {
      request
    }
  });
});

export default {
  getServiceRequests,
  getServiceRequest,
  approveServiceRequest,
  declineServiceRequest
};
