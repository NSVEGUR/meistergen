import { app } from './app';
import config from './config';
import { createSpinner, Spinner } from 'nanospinner';
import { PrismaClient } from '@prisma/client';

let serverSpinner: Spinner;
const prisma = new PrismaClient();

const port = config.PORT || 3000;
if (config.NODE_ENV === 'development') {
  serverSpinner = createSpinner('Starting the server ...');
}

const server = app.listen(port, () => {
  if (config.NODE_ENV === 'development') {
    serverSpinner.start();
    setTimeout(() => {
      serverSpinner.success({
        text: `Server started successfully at port: ${port}`
      });
    }, 1000);
  } else {
    console.log(`Server started successfully at port: ${port}`);
  }
});

export { server, prisma, app };
