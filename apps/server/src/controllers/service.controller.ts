import { prisma } from "../server";
import { Service } from "@prisma/client";
import Crypto from "../services/crypto.service";
import catchAsync from "../utils/catchAsync.util";
import { Request, Response, NextFunction } from "express";
import AppError from "../utils/appError.util";

const protect = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { service } = req.params;
  if (!service) return next(new AppError("No such service exist", 404));
  const currentService = await prisma.service.findUnique({
    where: {
      uid: service,
    },
  });
  if (!currentService) return next(new AppError("No such service exist", 404));
  req.service = currentService;
  next();
});

const get = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { service } = req.params;
  if (!service) return next(new AppError("Service Params is Not Passed", 404));
  const foundService = await prisma.service.findUnique({
    where: {
      uid: service,
    },
  });
  if (!foundService) return next(new AppError("Service not found", 404));
  res.status(200).json({
    status: 200,
    message: "Service found",
    data: {
      email: req.user.email,
      service: {
        uid: foundService.uid,
        name: foundService.name,
        description: foundService.description,
        type: foundService.type,
        price: foundService.price,
      },
    },
  });
});

const getAll = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const services = await prisma.service.findMany({
    select: {
      uid: true,
      name: true,
      description: true,
      type: true,
      price: true,
    },
  });
  res.status(200).json({
    status: 200,
    message: "Services found successfully",
    data: {
      email: req.user.email,
      count: services.length,
      services,
    },
  });
});

export default {
  getAll,
  get,
  protect,
};