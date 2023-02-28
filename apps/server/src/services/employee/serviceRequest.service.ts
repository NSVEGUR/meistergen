import { prisma } from '../../server';
import prismaExclude from '../../utils/prismaExclude.util';

const getAll = async function () {
  const requests = await prisma.serviceRequest.findMany({
    where: {
      approved: false
    },
    select: {
      service: {
        select: {
          name: true,
          uid: true
        }
      },
      user: {
        select: {
          email: true
        }
      }
    }
  });
  return requests;
};

const get = async function (id: number) {
  const request = await prisma.serviceRequest.findUnique({
    where: {
      id
    },
    select: {
      service: {
        select: {
          name: true,
          type: true,
          price: true,
          description: true
        }
      },
      user: {
        select: {
          email: true
        }
      }
    }
  });
  return request;
};

const conclude = async function (id: number, employeeId: number, approve: boolean) {
  const request = await prisma.serviceRequest.update({
    where: {
      id
    },
    data: {
      approved: approve,
      concludedBy: employeeId
    },
    select: {
      service: {
        select: {
          name: true,
          type: true,
          price: true,
          description: true
        }
      },
      user: {
        select: {
          email: true
        }
      }
    }
  });
  return request;
};

export default {
  get,
  getAll,
  conclude
};
