import { Request, Response } from 'express';
import { CreateFormSchema, Form, GetFormSchema, UpdateFormAttributes } from '../models/form.model';
import {
	getFormDataFromModel,
	getTitleFromSchema,
	themeColorToBgColor,
	updateFormAccordingToSchema,
} from '../utils/form.util';
import { extractTokenFromHeader } from '../utils/helper.util';
import { verifyJwtToken } from '../utils/user.util';

export const create = async (req: Request, res: Response) => {
	const jwtVerifyResponse = verifyJwtToken(extractTokenFromHeader(req));
	if (jwtVerifyResponse.error) return res.status(401).json({ message: jwtVerifyResponse.error });
	const bodyValidateResponse = CreateFormSchema.validate(req.body);
	if (bodyValidateResponse.error)
		return res.status(400).json({ message: bodyValidateResponse.error.details[0].message });
	const { schema } = bodyValidateResponse.value;
	const form = await Form.create({
		title: getTitleFromSchema(schema),
		userId: jwtVerifyResponse.payload?.id,
	});
	updateFormAccordingToSchema(form, schema);
	return res.status(200).json({
		id: form.getDataValue('id'),
	});
};

export const get = async (req: Request, res: Response) => {
	const jwtVerifyResponse = verifyJwtToken(extractTokenFromHeader(req));
	if (jwtVerifyResponse.error) return res.status(401).json({ message: jwtVerifyResponse.error });
	const bodyValidateResponse = GetFormSchema.validate(req.query);
	if (bodyValidateResponse.error)
		return res.status(400).json({ message: bodyValidateResponse.error.details[0].message });
	const { id } = bodyValidateResponse.value;
	const form = await Form.findOne({
		where: {
			id,
			userId: jwtVerifyResponse.payload?.id,
		},
	});
	if (form === null) return res.status(404).json({ message: 'Form not found' });
	return res.status(200).json({
		...getFormDataFromModel(form),
	});
};

export const update = async (req: Request, res: Response) => {
	const jwtVerifyResponse = verifyJwtToken(extractTokenFromHeader(req));
	if (jwtVerifyResponse.error) return res.status(401).json({ message: jwtVerifyResponse.error });
	const bodyValidateResponse = UpdateFormAttributes.validate(req.body);
	if (bodyValidateResponse.error)
		return res.status(400).json({ message: bodyValidateResponse.error.details[0].message });
	const { id, key, value } = bodyValidateResponse.value;
	const form = await Form.findOne({
		where: {
			id,
			userId: jwtVerifyResponse.payload?.id,
		},
	});
	if (form === null) return res.status(404).json({ message: 'Form not found' });
	form.set({ [key]: value });
	if (key === 'themeColor')
		form.set({
			backgroundColor: themeColorToBgColor(value),
		});
	await form.save();
	return res.status(200).json({
		...getFormDataFromModel(form),
	});
};
