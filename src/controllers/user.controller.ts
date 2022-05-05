import { User, UserCheckUserSchema,UserSignInSchema, UserSignUpSchema } from '../models/user.model';
import { Request, Response } from 'express';
import { createJwtToken } from '../utils/user.util';
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
	const token = createJwtToken(user);
	return res.json({ token });
}

export const signUp = async (req: Request, res: Response) => {
	const { error, value } = UserSignUpSchema.validate(req.body);
	if (error)
		return res.status(400).json( { message: error.details[0].message } );
	const user = await User.findOne({ where: { username: value.username } });
	if (user === null) {
		const passwordHash = bcrypt.hashSync(value.password, 10);
		const user = await User.create({
			firstName: value.firstName,
			lastName: value.lastName,
			username: value.username,
			passwordHash: passwordHash,
		});
		const token = createJwtToken(user);
		return res.json({ token });
	}
	return res.status(409).json({ message: 'Username already exists' });
}