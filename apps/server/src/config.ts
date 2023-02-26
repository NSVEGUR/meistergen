import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, "./../.env"),
});

interface ENV {
  NODE_ENV: string | undefined;
  PORT: number | undefined;

  DB_HOST: string | undefined;
  DB_PORT: string | undefined;
  DB_SCHEMA: string | undefined;
  POSTGRES_USER: string | undefined;
  POSTGRES_PASSWORD: string | undefined;
  POSTGRES_DB: string | undefined;
  DATABASE_URL: string | undefined;

  JWT_SECRET: string | undefined;
  JWT_EXPIRES_IN: string | undefined;
  JWT_COOKIE_EXPIRES_IN: string | undefined;

  FILE_STORE: string | undefined;
}

interface CONFIG {
  NODE_ENV: string;
  PORT: number;

  DB_HOST: string;
  DB_PORT: string;
  DB_SCHEMA: string;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_DB: string;
  DATABASE_URL: string;

  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;
  JWT_COOKIE_EXPIRES_IN: string;

  FILE_STORE: string;
}

const getEnv = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,

    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_SCHEMA: process.env.DB_SCHEMA,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_DB: process.env.POSTGRES_DB,
    DATABASE_URL: process.env.DATABASE_URL,

    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
    JWT_COOKIE_EXPIRES_IN: process.env.JWT_COOKIE_EXPIRES_IN,

    FILE_STORE: process.env.FILE_STORE,
  };
};

const getConfig = (env: ENV): CONFIG => {
  for (const [key, value] of Object.entries(env)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return env as CONFIG;
};

const config = getConfig(getEnv());
export default config;
