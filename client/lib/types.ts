import React, { ReactElement } from 'react';

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

interface ElevationScrollProps {
	window?: () => Window;
	children: ReactElement;
}

interface WorkspaceTool {
	name: string,
	icon: string,
	description: string,
	url: string,
}

interface WorkspacePopUpProps {
	onClose: (value: boolean) => void,
	isOpen: boolean
}

type GoogleCardLayoutProps = {
	children: React.ReactNode,
	loading: boolean,
	containerClassName?: string,
};

export type {
	HelperText,
	FormElement,
	PasswordParams,
	ElevationScrollProps,
	WorkspaceTool,
	WorkspacePopUpProps,
	GoogleCardLayoutProps,
};