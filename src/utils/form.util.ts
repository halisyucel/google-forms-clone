import { Model } from 'sequelize';
import { FormSchemaType } from '../models/form.model';

export const themeColorToBgColor = (color: string) =>
	({
		'#db4437': '#fae3e1',
		'#673ab7': '#f0ebf8',
		'#3f51b5': '#eceef8',
		'#4285f4': '#e9f0f8',
		'#03a9f4': '#e1f5f8',
		'#00bcd4': '#e0f7fa',
		'#ff5722': '#fbe9e7',
		'#ff9800': '#fff3e0',
		'#009688': '#e0f2f1',
		'#4caf50': '#e8f5e9',
		'#607d8b': '#eceff1',
		'#9e9e9e': '#fafafa',
	}[color]);

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
