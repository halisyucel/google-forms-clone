import { Model } from 'sequelize';
import jwt from 'jsonwebtoken';
import GeneralConfig from '../configs/general.config';


export function createJwtToken(user: Model): string {
	const jwtPayload = {
		id: user.getDataValue('id'),
		firstName: user.getDataValue('firstName'),
		lastName: user.getDataValue('lastName'),
		username: user.getDataValue('username')
	};
	return jwt.sign(jwtPayload, GeneralConfig.JWT_SECRET, { expiresIn: 60 * 60 * 8 });
}