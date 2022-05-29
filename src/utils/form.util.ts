import { Model } from 'sequelize';
import { FormSchemaType } from '../models/form.model';

export interface FormData {
	id: string;
	title: string;
	description?: string;
	answersAreAcceptable: boolean;
	showProgressBar: boolean;
	shuffleTheOrderOfTheQuestions: boolean;
	confirmationMessage: string;
	showLinkToPostAnotherReply: boolean;
	headerImage?: string;
	themeColor: string;
	backgroundColor: string;
	fontType: string;
	screenshot?: string;
	createdAt: string;
	updatedAt: string;
}

export const getTitleFromSchema = (schema: FormSchemaType): string => {
	switch (schema) {
		case 'empty':
			return 'Untitled form';
		case 'event-rsvp':
			return 'Event RSVP Form';
		case 't-shirt-request':
			return 'T-Shirt Request Form';
		case 'contact-information':
			return 'Contact Information';
		case 'party-invitation':
			return 'Party Invitation';
		case 'event-registration':
			return 'Event Registration Form';
		default:
			return 'Untitled form';
	}
};

export const updateFormAccordingToSchema = (form: Model, schema: FormSchemaType): void => {};

export const getFormDataFromModel = (form: Model): FormData => {
	const data = form.get({ plain: true });
	delete data.userId;
	return data;
};
