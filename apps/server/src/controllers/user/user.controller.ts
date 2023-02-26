import catchAsync from "../../utils/catchAsync.util";
import { NextFunction, Request, Response } from "express";
import puppeteer from "puppeteer";
import config from "../../config";
import { prisma } from "../../server";

const applyService = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { letter } = req.body;
  const files = req.files as Express.Multer.File[];
  const userService = await prisma.userService.create({
    data: {
      userId: req.user.id,
      serviceId: req.service.id,
    },
  });
  let data = files.map((file) => {
    return {
      uid: file.filename,
      name: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      authorId: userService.id,
    };
  });
  if (letter) {
    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();
    await page.setContent(letter);
    const fileName = `${req.user.id}$${req.service.id}$${Date.now()}.pdf`;
    const buffer = await page.pdf({
      format: "A4",
      path: `${config.FILE_STORE}/${fileName}`,
    });
    await browser.close();
    data.push({
      uid: fileName,
      name: "letter.pdf",
      mimetype: "application/pdf",
      size: Buffer.byteLength(buffer),
      authorId: userService.id,
    });
  }
  const newFiles = await prisma.file.createMany({
    data,
  });
  res.status(201).json({
    status: 201,
    message: "Applied to the service",
    data: {
      user: {
        email: req.user.email,
      },
      service: {
        name: req.service.name,
      },
      files: {
        names: data.map((file) => {
          return file.name;
        }),
      },
    },
  });
});

export default {
  applyService,
};
