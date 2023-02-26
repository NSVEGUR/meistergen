import crypto from "crypto";

function crypticRandomUUID() {
  return crypto.randomUUID();
}

function crypticRandomBytes(bytes = 32) {
  return crypto.randomBytes(bytes).toString("hex");
}

export default { crypticRandomUUID, crypticRandomBytes };
