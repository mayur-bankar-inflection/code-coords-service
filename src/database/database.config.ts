import * as dotenv from 'dotenv';

if (typeof process.env.NODE_ENV === 'undefined') {
  dotenv.config();
}

export type DatabaseDialect = 'mysql';

export interface DatabaseConfig {
  username: string | undefined;
  password: string | undefined;
  database: string | undefined;
  host: string | undefined;
  port?: number | undefined;
  dialect: DatabaseDialect;
  pool: {
    max: number;
    min: number;
    acquire: number;
    idle: number;
  };
}

export const Config: DatabaseConfig = {
  username: process.env.DB_USER_NAME,
  password: process.env.DB_USER_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  dialect: process.env.DB_DIALECT as DatabaseDialect,
  pool: {
    max: 20,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
