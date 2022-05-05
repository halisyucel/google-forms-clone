import { Sequelize } from 'sequelize';
import dbConfig from '../configs/db.config';

export const sequelize = new Sequelize(
	dbConfig.database,
	dbConfig.user,
	dbConfig.password, {
		host: dbConfig.host,
		logging: false,
		dialect: 'mysql',
		dialectOptions: {
			ssl: {
				rejectUnauthorized: true,
			}
		}
	}
);