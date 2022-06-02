import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEditor } from '../../redux/features/editorSlice';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/editor.tabs.module.scss';

export type TabsValue = 'questions' | 'answers' | 'settings';

// TODO: form useSelector den gelenleri genel olarak içeri böyle al

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
		<React.Fragment>
			<div className={styles.tabs_section}>
				<div className={styles.tabs_section__tabs}>
					<span
						className={styles.tabs_section__tabs__tab}
						onClick={() => setTabsValue('questions')}
					>
						Questions
					</span>
					<span
						className={styles.tabs_section__tabs__tab}
						onClick={() => setTabsValue('answers')}
					>
						Answers
					</span>
					<span
						className={styles.tabs_section__tabs__tab}
						onClick={() => setTabsValue('settings')}
					>
						Settings
					</span>
					<span
						style={{ left: `${tabsCursorLeftPosition}px` }}
						className={styles.tabs_section__tabs__cursor}
					/>
				</div>
			</div>
			<style
				dangerouslySetInnerHTML={{
					__html: `
						.${styles.tabs_section__tabs__tab}:hover {
							background-color: ${backgroundColor};
						}
						.${styles.tabs_section__tabs__cursor} {
							background-color: ${themeColor};
						}
					`,
				}}
			/>
		</React.Fragment>
	);
};

export default Tabs;
