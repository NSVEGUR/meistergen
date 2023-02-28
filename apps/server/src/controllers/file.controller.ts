import { Request, Response, NextFunction } from 'express';
import catchAsync from '../utils/catchAsync.util';
import config from '../config';
import { prisma } from '../server';
import AppError from '../utils/appError.util';

const download = catchAsync(async function (req: Request, res: Response, next: NextFunction) {
  const { file } = req.params;
  const fileData = await prisma.file.findUnique({
    where: {
      uid: file
    }
  });
  if (!fileData) return next(new AppError('Not file found', 404));
  res.download(`${config.FILE_STORE}/${fileData.uid}`);
});

export default {
  download
};
