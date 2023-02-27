import { prisma } from '../server';
import { Role } from '@prisma/client';
import Auth from '../utils/auth.util';
import Crypto from '../utils/crypto.util';

const create = async function (email: string, password: string, role: Role) {
  await prisma.user.create({
    data: {
      uid: Crypto.crypticRandomUUID(),
      email: email,
      password: await Auth.hashPassword(password),
      role: role
    }
  });
};

const findBasedOnEmail = async function (email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email: email
    }
  });
  return user;
};

const findBasedOnUid = async function (uid: string) {
  const user = await prisma.user.findUnique({
    where: {
      uid: uid
    }
  });
  return user;
};

const updateToken = async function (uid: string) {
  const user = await prisma.user.update({
    where: {
      uid
    },
    data: {
      uid: Crypto.crypticRandomUUID()
    }
  });
  return user;
};

export default {
  create,
  findBasedOnEmail,
  findBasedOnUid,
  updateToken
};
