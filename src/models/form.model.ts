import { DataTypes } from 'sequelize';
import connection from '../services/db.service';

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
            allowNull: false,
            validate: {
                notEmpty: true,
            },
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
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        lastOpenedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        },
        screenshot: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
    },
    {
        tableName: 'forms',
        timestamps: true,
        createdAt: true,
        updatedAt: true,
    },
);
