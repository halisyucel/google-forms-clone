import CheckIcon from '@mui/icons-material/Check';
import { Tooltip } from '@mui/material';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import useUpdateForm from '../../hooks/useUpdateForm';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/editor.theme-color.module.scss';
import { colors } from '../../utils/editor';

const ThemeColor = () => {
	const updateForm = useUpdateForm();
	const form = useSelector((state: RootState) => state.form);
	const handleClick = useCallback(
		(color: string) => {
			updateForm({
				key: 'themeColor',
				value: color,
			});
		},
		[updateForm],
	);
	return (
		<section className={styles.theme_color}>
			<h5>Theme color</h5>
			<div className={styles.theme_color__colors}>
				{colors.map(({ name, color }) => {
					return (
						<Tooltip key={name} title={`${name} ${color}`} placement={'top'}>
							<span
								style={{
									color: color,
									backgroundColor: color,
									boxShadow:
										form.themeColor === color
											? '0 0 0 2px currentColor'
											: 'unset',
								}}
								className={styles.theme_color__colors__item}
								onClick={() => handleClick(color)}
							>
								{form.themeColor === color && <CheckIcon />}
							</span>
						</Tooltip>
					);
				})}
			</div>
		</section>
	);
};

export default ThemeColor;
