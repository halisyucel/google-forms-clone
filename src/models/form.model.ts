import Joi from 'joi';
import { DataTypes } from 'sequelize';
import connection from '../services/db.service';

export type FormSchemaType =
	| 'empty'
	| 'event-rsvp'
	| 't-shirt-request'
	| 'contact-information'
	| 'party-invitation'
	| 'event-registration';

export const CreateFormSchema = Joi.object({
	schema: Joi.string()
		.valid(
			'empty',
			'event-rsvp',
			't-shirt-request',
			'contact-information',
			'party-invitation',
			'event-registration',
		)
		.required(),
});

export const GetFormSchema = Joi.object({
	id: Joi.string().required(),
});

export const UpdateFormAttributes = Joi.object({
	id: Joi.string().required(),
	key: Joi.string().required(),
	value: Joi.alternatives().try(Joi.string(), Joi.boolean(), Joi.number()).required(),
});

export const Form = connection.define(
	'Form',
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: null,
		},
		answersAreAcceptable: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true,
		},
		showProgressBar: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		shuffleTheOrderOfTheQuestions: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		confirmationMessage: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: 'Your response has been recorded',
			validate: {
				notEmpty: true,
			},
		},
		showLinkToPostAnotherReply: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		headerImage: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null,
		},
		themeColor: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: '#673ab7',
			validate: {
				notEmpty: true,
			},
		},
		backgroundColor: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: '#f0ebf8',
			validate: {
				notEmpty: true,
			},
		},
		fontType: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: 'BASIC',
			validate: {
				notEmpty: true,
			},
		},
		screenshot: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null,
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
	},
	{
		tableName: 'forms',
		timestamps: true,
		createdAt: true,
		updatedAt: true,
	},
);
