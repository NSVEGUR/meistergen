import { prisma } from '../server';
import prismaExclude from '../utils/prismaExclude.util';

const appliedServices = async function (id: number) {
  const serviceRequests = await prisma.serviceRequest.findMany({
    where: {
      userId: id,
      accepted: false
    },
    select: {
      service: true
    }
  });
  return serviceRequests
    .map((request) => request.service)
    .map((service) => prismaExclude(service, ['id']));
};

const approvedServices = async function (id: number) {
  const serviceRequests = await prisma.serviceRequest.findMany({
    where: {
      userId: id,
      accepted: true
    },
    select: {
      service: true
    }
  });
  return serviceRequests
    .map((request) => request.service)
    .map((service) => prismaExclude(service, ['id']));
};

const availableServices = async function (id: number) {
  const serviceRequests = (
    await prisma.serviceRequest.findMany({
      where: {
        userId: id
      },
      select: {
        serviceId: true
      }
    })
  ).map((request) => request.serviceId);
  const services = await prisma.service.findMany();
  const availableServices = services.filter((service) => !serviceRequests.includes(service.id));
  return availableServices.map((service) => prismaExclude(service, ['id']));
};

export default {
  appliedServices,
  approvedServices,
  availableServices
};
