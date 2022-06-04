import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useUpdateForm from '../../hooks/useUpdateForm';
import { RootState } from '../../redux/store';
import Entity from './entity';
import StyledTextField from './styled-text-field';

// TODO - all updateForm hooks should trim() the value

const TitleAndDescription = () => {
	const updateForm = useUpdateForm();
	const { title, description, fontStyle, themeColor } = useSelector(
		(state: RootState) => state.form,
	);
	const [titleValue, setTitleValue] = useState<string>('Untitled form');
	const [descriptionValue, setDescriptionValue] = useState<string>('');
	const handleChangeTitle = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setTitleValue(event.target.value);
	}, []);
	const handleBlurTitle = useCallback(() => {
		if (titleValue === title) return;
		if (!titleValue.trim()) {
			setTitleValue(title);
			return;
		}
		updateForm({
			key: 'title',
			value: titleValue.trim(),
		});
	}, [title, titleValue, updateForm]);
	const handleChangeDescription = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setDescriptionValue(event.target.value);
	}, []);
	const handleBlurDescription = useCallback(() => {
		if (descriptionValue === (description || '')) return;
		updateForm({
			key: 'description',
			value: descriptionValue.trim() === '' ? null : descriptionValue.trim(),
		});
	}, [description, descriptionValue, updateForm]);
	useEffect(() => setTitleValue(title), [title]);
	useEffect(() => setDescriptionValue(description || ''), [description]);
	return (
		<Entity id={'title-and-description'} title={true}>
			<StyledTextField
				title={true}
				bottomLine={true}
				value={titleValue}
				fontStyle={fontStyle}
				onChange={handleChangeTitle}
				onBlur={handleBlurTitle}
				multiline={true}
				themeColor={themeColor}
				placeholder={'Form title'}
			/>
			<StyledTextField
				title={false}
				bottomLine={true}
				value={descriptionValue}
				fontStyle={'BASIC'}
				onChange={handleChangeDescription}
				onBlur={handleBlurDescription}
				multiline={true}
				themeColor={themeColor}
				placeholder={'Form description'}
			/>
		</Entity>
	);
};

export default TitleAndDescription;
