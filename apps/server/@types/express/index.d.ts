import { Service, ServiceRequest, User } from '@prisma/client';

declare global {
  namespace Express {
    interface Request {
      user: User;
      service: Service;
      serviceRequest: ServiceRequest;
    }
  }
}

export {};
