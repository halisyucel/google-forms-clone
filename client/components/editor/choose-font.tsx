import { MenuItem, Select } from '@mui/material';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import useUpdateForm from '../../hooks/useUpdateForm';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/editor.choose-font.module.scss';

const ChooseFont = () => {
	const updateForm = useUpdateForm();
	const form = useSelector((state: RootState) => state.form);
	const handleChange = useCallback(
		(fontStyle: string) => {
			updateForm({
				key: 'fontStyle',
				value: fontStyle,
			});
		},
		[updateForm],
	);
	return (
		<section className={styles.choose_font}>
			<h5>Font style</h5>
			<Select
				value={form.fontStyle}
				size={'small'}
				datatype={form.fontStyle}
				className={styles.choose_font__select}
				onChange={(e) => handleChange(e.target.value)}
			>
				<MenuItem className={styles.choose_font__select__button} value={'BASIC'}>
					Basic
				</MenuItem>
				<MenuItem className={styles.choose_font__select__button} value={'DECORATIVE'}>
					Decorative
				</MenuItem>
				<MenuItem className={styles.choose_font__select__button} value={'FORMAL'}>
					Formal
				</MenuItem>
				<MenuItem className={styles.choose_font__select__button} value={'SPRIGHT'}>
					Spright
				</MenuItem>
			</Select>
		</section>
	);
};

export default ChooseFont;
