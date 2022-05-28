import jwt, { JwtPayload } from 'jsonwebtoken';
import { Model } from 'sequelize';
import GeneralConfig from '../configs/general.config';

export interface CreateJwtTokenResponse {
    token: string;
    id: number;
    firstName: string;
    lastName: string;
    username: string;
}

export interface VerifyJwtTokenResponse {
    payload?: JwtPayload;
    error?: string;
}

export function createJwtToken(user: Model): CreateJwtTokenResponse {
    const jwtPayload = {
        id: user.getDataValue('id'),
        firstName: user.getDataValue('firstName'),
        lastName: user.getDataValue('lastName'),
        username: user.getDataValue('username'),
    };
    const token = jwt.sign(jwtPayload, GeneralConfig.JWT_SECRET, {
        expiresIn: 60 * 60 * 8,
    });
    return { token, ...jwtPayload };
}

export function verifyJwtToken(token: string): VerifyJwtTokenResponse {
    try {
        const payload = jwt.verify(
            token,
            GeneralConfig.JWT_SECRET,
        ) as JwtPayload;
        delete payload.iat;
        delete payload.exp;
        return { payload };
    } catch (err) {
        return { error: 'invalid token' };
    }
}
