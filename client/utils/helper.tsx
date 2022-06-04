import React from 'react';
import type { HelperText } from './types';

export const createHelperText = ({ type = 'none', message }: HelperText) => {
	if (type === 'none') return null;
	if (type === 'error')
		return (
			<div className={'helper_text'} style={{ color: 'var(--color-red)', fontWeight: '500' }}>
				{message}
			</div>
		);
	if (type === 'info')
		return (
			<div className={'helper_text'} style={{ color: 'var(--color-black)' }}>
				{message}
			</div>
		);
};
