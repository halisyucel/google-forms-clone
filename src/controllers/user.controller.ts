import { Request, Response } from 'express';
import { User, UserCheckUserSchema,UserSignInSchema, UserSignUpSchema } from '../models/user.model';
import GeneralConfig from '../configs/general.config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const checkUser = async (req: Request, res: Response) => {
	const { error, value } = UserCheckUserSchema.validate(req.body);
	if (error)
		return res.status(400).json({ message: error.details[0].message });
	const user = await User.findOne({ where: { username: value.username } });
	if (user === null)
		return res.status(404).json({ message: 'User not found' });
	return res.status(200).json({ status: true });
}

export const signIn = async (req: Request, res: Response) => {
	const { error, value } = UserSignInSchema.validate(req.body);
	if (error)
		return res.status(400).json({ message: error.details[0].message });
	const user = await User.findOne({ where: { username: value.username } });
	if (user === null)
		return res.status(404).json({ message: 'User not found' });
	if (!bcrypt.compareSync(value.password, user.getDataValue('passwordHash')))
		return res.status(401).json({ message: 'Invalid password' });
	const jwtPayload = {
		id: user.getDataValue('id'),
		firstName: user.getDataValue('firstName'),
		lastName: user.getDataValue('lastName'),
		username: user.getDataValue('username')
	};
	const token = jwt.sign(jwtPayload, GeneralConfig.JWT_SECRET, { expiresIn: 60 * 60 * 8 });
	return res.json({ token });
}

export const signUp = async (req: Request, res: Response) => {
	const { error, value } = UserSignUpSchema.validate(req.body);
	if (error)
		return res.status(400).json( { message: error.details[0].message } );
	const user = await User.findOne({ where: { username: value.username } });
	if (user === null) {
		const passwordHash = bcrypt.hashSync(value.password, 10);
		await User.create({
			firstName: value.firstName,
			lastName: value.lastName,
			username: value.username,
			passwordHash: passwordHash,
		});
		return res.json({ status: true });
	}
	return res.status(400).json({ message: 'Username already exists' });
}