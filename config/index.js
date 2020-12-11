import path from 'path'
import dotenv from 'dotenv';

dotenv.config({
  path: path.join(__dirname, `../env/.env.${process.env.NODE_ENV}`),
});

export const serverOptions = {
  port: process.env.PORT || 4000,
  endpoint: process.env.ENDPOINT || '/graphql',
  playground: process.env.PLAYGROUND || false,
};

export const API_URL = process.env.API_URL || '';