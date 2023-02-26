import { app } from './app';
import config from './config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const port = config.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server started successfully at port: ${port}`);
});

export { server, prisma };
