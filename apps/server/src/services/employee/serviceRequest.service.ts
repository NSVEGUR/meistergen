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

const get = async function (userId: number, serviceId: number) {
  const request = await prisma.serviceRequest.findUnique({
    where: {
      uid: {
        userId,
        serviceId
      }
    },
    select: {
      service: true,
      user: {
        select: {
          email: true
        }
      }
    }
  });
  return request;
};

const conclude = async function (
  userId: number,
  serviceId: number,
  employeeId: number,
  approve: boolean
) {
  const request = await prisma.serviceRequest.update({
    where: {
      uid: {
        userId: userId,
        serviceId: serviceId
      }
    },
    data: {
      approved: approve,
      concludedBy: employeeId
    }
  });
  return prismaExclude(request, ['id']);
};

export default {
  get,
  getAll,
  conclude
};
