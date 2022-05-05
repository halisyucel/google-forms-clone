import dotenv from 'dotenv';

dotenv.config();

type Config = {
	PORT: number,
	JWT_SECRET: string,
	DB_HOST: string,
	DB_USER: string,
	DB_PASSWORD: string,
	DB_NAME: string,
	DB_PORT: number,
}

const config: Config = {
	// @ts-ignore
	PORT: process.env.PORT || 3001,
	// @ts-ignore
	JWT_SECRET: process.env.JWT_SECRET,
	// @ts-ignore
	DB_HOST: process.env.DB_HOST,
	// @ts-ignore
	DB_USER: process.env.DB_USER,
	// @ts-ignore
	DB_PASSWORD: process.env.DB_PASSWORD,
	// @ts-ignore
	DB_NAME: process.env.DB_NAME,
	// @ts-ignore
	DB_PORT: process.env.DB_PORT,
};

export default config;