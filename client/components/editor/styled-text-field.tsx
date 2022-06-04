import { TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

// TODO - use styled-components all components

const StyledTextField: React.FC<any> = ({
	className,
	themeColor = '#673ab7',
	title = false,
	bottomLine = false,
	fontStyle = 'BASIC',
	...props
}) => {
	return (
		<TextField
			className={className}
			autoComplete={'off'}
			spellCheck={false}
			variant={'standard'}
			{...props}
		/>
	);
};

export const fontStyles: (fontStyle: string) => string = (fontStyle) => {
	return {
		BASIC: 'var(--font-roboto)',
		DECORATIVE: 'var(--font-decorative)',
		FORMAL: 'var(--font-formal)',
		SPRIGHT: 'var(--font-spright)',
	}[fontStyle] as string;
};

export default styled(StyledTextField)`
	& {
		width: 100%;
		margin-bottom: ${(props) => (props.title ? '12px' : '0')} !important;
	}
	& .MuiInput-root::before {
		display: ${(props) => (props.bottomLine ? 'block' : 'none')};
		border-bottom: 1px solid var(--color-border) !important;
	}
	& .MuiInput-root::after {
		border-bottom: 2px solid ${(props) => props.themeColor} !important;
	}
	& .MuiInputBase-input {
		font-size: ${(props) => (props.title ? '32px' : '16px')};
		font-family: ${(props) => fontStyles(props.fontStyle)};
		line-height: ${(props) => (props.title ? '42px' : '24px')};
	}
`;
