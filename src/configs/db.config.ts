import GeneralConfig from './general.config';

type DataBaseConfig = {
    host: string;
    port: string;
    user: string;
    password: string;
    database: string;
};

const db: DataBaseConfig = {
    host: GeneralConfig.DB_HOST,
    port: GeneralConfig.DB_PORT,
    user: GeneralConfig.DB_USER,
    password: GeneralConfig.DB_PASSWORD,
    database: GeneralConfig.DB_NAME,
};

export default db;
