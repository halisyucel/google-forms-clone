import { Request } from 'express';

export function extractTokenFromHeader(req: Request): string {
	return req.headers.authorization?.split(' ')[1] as string;
}