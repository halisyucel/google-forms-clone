import { TextField } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import useUpdateForm from '../../hooks/useUpdateForm';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/editor.title.module.scss';

// TODO - update style file name

const HeaderTitle = () => {
	const updateForm = useUpdateForm();
	const form = useSelector((state: RootState) => state.form);
	const editor = useSelector((state: RootState) => state.editor);
	const invisibleTitle = useRef<HTMLDivElement>(null);
	const [title, setTitle] = useState<string>('Untitled Form');
	const [beforeFocus, setBeforeFocus] = useState<string>('');
	const [titleWidth, setTitleWidth] = useState<number>(0);
	const handleBlur = useCallback(
		(value: string) => {
			if (!value.trim()) {
				setTitle(beforeFocus);
				return;
			}
			if (value !== beforeFocus) {
				updateForm({ key: 'title', value: value });
				return;
			}
		},
		[beforeFocus, updateForm],
	);
	useEffect(() => setTitle(form.title), [form.title]);
	useEffect(() => {
		if (invisibleTitle.current) {
			const { width } = invisibleTitle.current.getBoundingClientRect();
			setTitleWidth(width + 5 > 590 ? 590 : width + 5);
		}
	}, [title, invisibleTitle]);
	const saveText = useMemo(() => {
		switch (editor.save) {
			case 'saved':
				return 'All changes are saved';
			case 'saving':
				return 'Saving changes...';
			case 'empty':
				return '';
			case 'error':
				return 'Changes could not be saved';
			default:
				return '';
		}
	}, [editor.save]);
	return (
		<React.Fragment>
			<div ref={invisibleTitle} className={styles.invisible_title}>
				{title.replaceAll(' ', '_')}
			</div>
			<TextField
				style={{ width: `${titleWidth}px` }}
				className={styles.title}
				spellCheck={false}
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				onFocus={(e) => setBeforeFocus(e.target.value)}
				onBlur={(e) => handleBlur(e.target.value)}
				size={'small'}
				variant={'standard'}
				autoComplete={'off'}
			/>
			<div className={styles.save_state_text}>{saveText}</div>
		</React.Fragment>
	);
};

export default HeaderTitle;
