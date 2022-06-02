import CheckIcon from '@mui/icons-material/Check';
import { Tooltip } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useUpdateForm from '../../hooks/useUpdateForm';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/editor.background-color.module.scss';
import { colors } from '../../utils/editor';

const BackgroundColor = () => {
	const updateForm = useUpdateForm();
	const form = useSelector((state: RootState) => state.form);
	const [bgColors, setBgColors] = useState<string[]>([]);
	const getNameFromIndex = (index: number) => {
		switch (index) {
			case 0:
				return 'Light';
			case 1:
				return 'Medium';
			case 2:
				return 'Dark';
			case 3:
				return 'Gray';
			default:
				return '';
		}
	};
	const handleClick = useCallback(
		(color: string) => {
			updateForm({
				key: 'backgroundColor',
				value: color,
			});
		},
		[updateForm],
	);
	useEffect(() => {
		const currentColor = colors.find(({ color }) => color === form.themeColor);
		setBgColors(currentColor ? currentColor.bgColors : []);
	}, [form.themeColor]);
	return (
		<section className={styles.background_color}>
			<h5>Background color</h5>
			<div className={styles.background_color__colors}>
				{bgColors.map((color, index) => {
					return (
						<Tooltip
							key={index}
							title={`${getNameFromIndex(index)} ${color}`}
							placement={'top'}
						>
							<span
								style={{
									color: color,
									backgroundColor: color,
									padding: form.backgroundColor === color ? '2px' : '0',
									margin: form.backgroundColor === color ? '2px' : '4px',
								}}
								className={styles.background_color__colors__item}
								onClick={() => handleClick(color)}
							>
								{form.backgroundColor === color && <CheckIcon />}
							</span>
						</Tooltip>
					);
				})}
			</div>
		</section>
	);
};

export default BackgroundColor;
