export interface HelperText {
	type: 'error' | 'info' | 'none',
	message?: string
}

export interface FormElement {
	value: string,
	error: boolean,
}

export interface PopupProps {
	isOpen: boolean,
	onClose?: () => void,
}