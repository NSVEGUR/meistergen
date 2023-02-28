import { app } from './app';
import config from './config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const port = config.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server started successfully at port: ${port}`);
});

process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception 💥: ', err.message);
  console.log('Closing server now 🤕');
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.log('Unhandled Rejection ⛔️');
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully..✌🏻');
  server.close(() => {
    console.log('Closed remaining connections 🔒');
    process.exit(0);
  });
});

export { server, prisma };
