import { prisma } from "../../server";
import { Service } from "@prisma/client";
import Crypto from "../../services/crypto.service";
import catchAsync from "../../utils/catchAsync.util";
import { Request, Response, NextFunction } from "express";
import AppError from "../../utils/appError.util";

const create = catchAsync(async function (
  req: Request<{}, {}, Service>,
  res: Response,
  next: NextFunction
) {
  const { name, description, type, price } = req.body;
  const newService = await prisma.service.create({
    data: {
      name: name.charAt(0).toUpperCase() + name.slice(1),
      description: description.charAt(0).toUpperCase() + description.slice(1),
      uid: Crypto.crypticRandomBytes(),
      type,
      price,
    },
  });
  res.status(201).json({
    status: 201,
    message: "Service created successfully",
    data: {
      name: newService.name,
      description: newService.description,
      type: newService.type,
      price: newService.price,
    },
  });
});

const remove = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { service } = req.params;
  if (!service) return next(new AppError("Service Params is Not Passed", 404));
  await prisma.service.delete({
    where: {
      uid: service,
    },
  });
  res.status(204).json({
    status: 204,
  });
});

const update = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { service } = req.params;
  const { data } = req.body;
  const updatedService = await prisma.service.update({
    where: {
      uid: service,
    },
    data: data,
  });
  res.status(200).json({
    status: 200,
    message: "Service updated",
    data: {
      uid: updatedService.uid,
      name: updatedService.name,
      description: updatedService.description,
      type: updatedService.type,
      price: updatedService.price,
    },
  });
});

export default {
  create,
  remove,
  update,
};
