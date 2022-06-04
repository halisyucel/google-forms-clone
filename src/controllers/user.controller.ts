import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { Upload } from '../models/assets.model';
import {
	User,
	UserCheckUserSchema,
	UserSignInSchema,
	UserSignUpSchema,
} from '../models/user.model';
import { extractTokenFromHeader } from '../utils/helper.util';
import { createJwtToken, verifyJwtToken } from '../utils/user.util';

export const signIn = async (req: Request, res: Response) => {
	const { error, value } = UserSignInSchema.validate(req.body);
	if (error) return res.status(400).json({ message: error.details[0].message });
	const user = await User.findOne({ where: { username: value.username } });
	if (user === null) return res.status(404).json({ message: 'User not found' });
	if (!bcrypt.compareSync(value.password, user.getDataValue('passwordHash')))
		return res.status(401).json({ message: 'Invalid password' });
	const credentials = createJwtToken(user);
	return res.status(200).json({ ...credentials });
};

export const signUp = async (req: Request, res: Response) => {
	const { error, value } = UserSignUpSchema.validate(req.body);
	if (error) return res.status(400).json({ message: error.details[0].message });
	let user = await User.findOne({ where: { username: value.username } });
	if (user !== null) return res.status(409).json({ message: 'Username already exists' });
	const passwordHash = bcrypt.hashSync(value.password, 10);
	user = await User.create({
		firstName: value.firstName,
		lastName: value.lastName,
		username: value.username,
		passwordHash: passwordHash,
	});
	const credentials = createJwtToken(user);
	return res.json({ ...credentials });
};

export const checkUser = async (req: Request, res: Response) => {
	const { error, value } = UserCheckUserSchema.validate(req.body);
	if (error) return res.status(400).json({ message: error.details[0].message });
	const user = await User.findOne({ where: { username: value.username } });
	if (user === null) return res.status(404).json({ message: 'User not found' });
	return res.status(200).json({ status: true });
};

export const checkToken = async (req: Request, res: Response) => {
	const token = extractTokenFromHeader(req);
	const { error, payload } = verifyJwtToken(token);
	if (error) return res.status(401).json({ message: error });
	return res.status(200).json({ token, ...payload });
};

// TODO: yeni bir şeyler ürettikçe burada silmeli
export const deleteUser = async (req: Request, res: Response) => {
	const { error, payload } = verifyJwtToken(extractTokenFromHeader(req));
	if (error) return res.status(401).json({ message: error });
	const uploads = await Upload.findAll({ where: { userId: payload?.id } });
	// delete all upload files
	for (const upload of uploads)
		fs.unlinkSync(path.join(__dirname, '../../../assets/uploads', upload.getDataValue('name')));
	// delete all upload records
	await Upload.destroy({ where: { userId: payload?.id } });
	// delete user
	await User.destroy({ where: { id: payload?.id } });
	return res.status(200).json({ status: true });
};
