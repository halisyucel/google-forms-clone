import dotenv from 'dotenv';

dotenv.config();

interface Config {
    PORT: string;
    JWT_SECRET: string;
    DB_HOST: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    DB_PORT: string;
}

const config: Config = {
    PORT: process.env.PORT as string,
    JWT_SECRET: process.env.JWT_SECRET as string,
    DB_HOST: process.env.DB_HOST as string,
    DB_USER: process.env.DB_USER as string,
    DB_PASSWORD: process.env.DB_PASSWORD as string,
    DB_NAME: process.env.DB_NAME as string,
    DB_PORT: process.env.DB_PORT as string,
};

export default config;
