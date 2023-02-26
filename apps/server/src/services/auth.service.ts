import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import config from "../config";

async function hashPassword(password: string, salt: number = 12) {
  return await bcrypt.hash(password, salt);
}

async function validPassword(currentPassword: string, password: string) {
  return await bcrypt.compare(currentPassword, password);
}

function signToken(uid: string, role: string) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        _id: uid,
        _role: role,
      },
      config.JWT_SECRET,
      {
        expiresIn: config.JWT_EXPIRES_IN,
      },
      (err, token) => {
        if (err) return reject(err);
        return resolve(token);
      }
    );
  });
}

function verifyToken(token: string) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.JWT_SECRET, (err, token) => {
      if (err) return reject(err);
      return resolve(token);
    });
  });
}

export default {
  validPassword,
  hashPassword,
  signToken,
  verifyToken,
};
