import Joi from 'joi';
import { DataTypes } from 'sequelize';
import connection from '../services/db.service';

export const DeleteUploadSchema = Joi.object({
	name: Joi.string().required(),
});

// todo bu elemana visible invisible özelliği eklenecek

export const Upload = connection.define(
	'Upload',
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true,
			},
		},
		mimetype: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		size: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		userId: {
			type: DataTypes.UUID,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
	},
	{
		tableName: 'uploads',
		timestamps: true,
		createdAt: true,
	},
);
