import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEditor } from '../../redux/features/editorSlice';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/editor.tabs.module.scss';
import Tab from './tab';

const tabValues = ['questions', 'answers', 'settings'];

export type TabsValue = 'questions' | 'answers' | 'settings';

const Tabs = () => {
	const dispatch = useDispatch();
	const { themeColor, backgroundColor } = useSelector((state: RootState) => state.form);
	const { tabsValue } = useSelector((state: RootState) => state.editor);
	const [tabsCursorLeftPosition, setTabsCursorLeftPosition] = useState<number>(0);
	useEffect(() => {
		if (tabsValue === 'questions') setTabsCursorLeftPosition(0);
		if (tabsValue === 'answers') setTabsCursorLeftPosition(85);
		if (tabsValue === 'settings') setTabsCursorLeftPosition(170);
	}, [tabsValue]);
	const setTabsValue = useCallback(
		(value: string) => {
			dispatch(
				updateEditor({
					key: 'tabsValue',
					value,
				}),
			);
		},
		[dispatch],
	);
	return (
		<div className={styles.tabs_section}>
			<div className={styles.tabs_section__tabs}>
				{tabValues.map((value, index) => (
					<Tab
						key={index}
						value={value}
						className={styles.tabs_section__tabs__tab}
						backgroundColor={backgroundColor}
						onClick={() => setTabsValue(value)}
					/>
				))}
				<span
					style={{
						left: `${tabsCursorLeftPosition}px`,
						backgroundColor: themeColor,
					}}
					className={styles.tabs_section__tabs__cursor}
				/>
			</div>
		</div>
	);
};

export default Tabs;
