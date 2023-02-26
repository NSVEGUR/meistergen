import { Service, User } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      user: User;
      service: Service;
    }
  }
}

export {};
