const { DataTypes } = require('sequelize');
import { sequelize } from '../services/db.service';
import Joi from 'joi';

export const UserSignUpSchema = Joi.object({
	firstName: Joi.string().required(),
	lastName: Joi.string().required(),
	username: Joi.string().required().regex(/^[a-zA-Z0-9.]+$/),
	password: Joi.string().required().min(8).regex(/^[a-zA-Z0-9.+\-*/!'^%&()\[\]{}?_|#$,;:]+$/),
});

export const UserSignInSchema = Joi.object({
	username: Joi.string().required(),
	password: Joi.string().required(),
});

export const UserCheckUserSchema = Joi.object({
	username: Joi.string().required(),
});

export const User = sequelize.define('User', {
	firstName: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		}
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		}
	},
	username: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		validate: {
			notEmpty: true,
		}
	},
	passwordHash: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		}
	},
}, {
	tableName: 'users',
	timestamps: true,
	createdAt: true,
});

(async () => await User.sync())();