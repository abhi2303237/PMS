import * as dotenv from "dotenv";
dotenv.config();

export const isDev = process.env.NODE_ENV == 'production' ? false : true
export const port = process.env.PORT
