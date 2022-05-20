import fs from 'fs';
import path from 'path';
import { DeleteUploadSchema } from '../models/assets.model';
import { Request, Response } from 'express';
import { verifyJwtToken } from '../utils/user.util';
import { Upload } from '../models/assets.model';

export const upload = async (req: Request, res: Response) => {
	const token = req.headers.authorization?.split(' ')[1] as string;
	const { error, payload } = verifyJwtToken(token);
	if (error)
		return res.status(401).json({ message: error });
	const upload = await Upload.create({
		name: req.file?.filename,
		mimetype: req.file?.mimetype,
		size: req.file?.size,
		userId: payload?.id,
	});
	return res.status(200).json({
		name: upload.getDataValue('name'),
		mimetype: upload.getDataValue('mimetype'),
		size: upload.getDataValue('size')
	});
};

export const get = async (req: Request, res: Response) => {
	const token = req.headers.authorization?.split(' ')[1] as string;
	const { error, payload } = verifyJwtToken(token);
	if (error)
		return res.status(401).json({ message: error });
	const uploads = await Upload.findAll({
		where: {
			userId: payload?.id,
		},
		order: [
			['createdAt', 'DESC'],
		],
	});
	return res.status(200).json( [
		...uploads.map(upload => ({
			name: upload.getDataValue('name'),
			mimetype: upload.getDataValue('mimetype'),
			size: upload.getDataValue('size'),
		}))
	]);
};

export const _delete = async (req: Request, res: Response) => {
	const token = req.headers.authorization?.split(' ')[1] as string;
	const jwtVerifyResponse = verifyJwtToken(token);
	if (jwtVerifyResponse.error)
		return res.status(401).json({ message: jwtVerifyResponse.error });
	const bodyValidateResponse = DeleteUploadSchema.validate(req.body);
	if (bodyValidateResponse.error)
		return res.status(400).json({ message: bodyValidateResponse.error.details[0].message });
	const upload = await Upload.findOne({
		where: {
			name: bodyValidateResponse.value.name,
		}
	});
	if (!upload)
		return res.status(404).json({ message: 'Asset not found' });
	if (upload.getDataValue('userId') !== jwtVerifyResponse.payload?.id)
		return res.status(403).json({ message: 'Forbidden' });
	fs.unlinkSync(path.join(__dirname, '../../../assets/uploads', upload.getDataValue('name')));
	await upload.destroy();
	return res.status(200).json({ status: true });
}