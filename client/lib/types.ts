interface HelperText {
	type: 'error' | 'info' | 'none',
	message?: string
}

interface FormElement {
	value: string,
	error: boolean,
}

interface PasswordParams {
	username?: string,
}

export type {
	HelperText,
	FormElement,
	PasswordParams,
};