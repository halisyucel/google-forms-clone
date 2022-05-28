import { Model } from 'sequelize';
import { FormSchemaType } from '../models/form.model';

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

export const updateFormAccordingToSchema = (
    form: Model,
    schema: FormSchemaType,
): void => {

};
