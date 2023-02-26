import { prisma } from '../server';
import { Role, User } from '@prisma/client';
import catchAsync from '../utils/catchAsync.util';
import { NextFunction, Request, Response } from 'express';
import Auth from '../utils/auth.util';
import Crypto from '../utils/crypto.util';
import AppError from '../utils/appError.util';
import fs from 'fs';
import config from '../config';

const protect = catchAsync(async function (req: Request, res: Response, next: NextFunction) {
  let token = '';
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) return next(new AppError(`You're not logged in! Please login to access`, 401));
  const decoded: any = await Auth.verifyToken(token);
  if (!decoded._id || !decoded._role) return next(new AppError('Not authorized', 401));
  const user = await prisma.user.findUnique({
    where: {
      uid: decoded._id
    }
  });
  if (!user || user.role !== decoded._role) return next(new AppError('User not found', 404));
  req.user = user;
  next();
});

const signup = catchAsync(async function (
  req: Request<{}, {}, User>,
  res: Response,
  next: NextFunction
) {
  const { email, password, role } = req.body;
  if (req.originalUrl.split('/')[1] != role.toLowerCase()) {
    return next(new AppError('Authorization error', 401));
  }
  // // For controlling admin and employee signup
  // if (Role.ADMIN == role || Role.EMPLOYEE == role)
  //   return next(new AppError("Unauthorized", 401));
  const data = {
    uid: Crypto.crypticRandomUUID(),
    email: email,
    password: await Auth.hashPassword(password),
    role: role
  };
  const folderPath = `${config.FILE_STORE}/${data.role}/${data.uid}`;
  const folderCreated = await fs.promises.mkdir(folderPath, {
    recursive: true
  });
  if (!folderCreated) return next(new AppError('Folder creation failed', 400));
  await prisma.user.create({
    data
  });
  return res.status(201).json({
    status: 201,
    message: 'Signed up successfully'
  });
});

const login = catchAsync(async function (
  req: Request<{}, {}, User>,
  res: Response,
  next: NextFunction
) {
  const { email, password, role } = req.body;
  if (req.originalUrl.split('/')[1] != role.toLowerCase()) {
    return next(new AppError('Authorization error', 401));
  }
  const user = await prisma.user.findUnique({
    where: {
      email: email
    }
  });
  if (!user || user.role != role || !(await Auth.validPassword(password, user.password))) {
    return next(new AppError('Invalid email or password', 404));
  }
  const updatedUser = await prisma.user.update({
    where: {
      uid: user.uid
    },
    data: {
      uid: Crypto.crypticRandomUUID()
    }
  });
  const token = await Auth.signToken(updatedUser.uid, updatedUser.role);
  return res.status(200).json({
    status: 200,
    message: 'Logged in successfully',
    data: {
      user: {
        token: token,
        email: updatedUser.email,
        role: updatedUser.role
      }
    }
  });
});

const get = catchAsync(async function (req: Request, res: Response, next: NextFunction) {
  const { user } = req;
  return res.status(200).json({
    status: 200,
    message: 'User found',
    data: {
      user: {
        email: user.email,
        role: user.role
      }
    }
  });
});

export default {
  protect,
  signup,
  login,
  get
};
