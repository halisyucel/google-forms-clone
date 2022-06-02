import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/editor.tabs.module.scss';

export type TabsValue = 'questions' | 'answers' | 'settings';

const Tabs = () => {
	const form = useSelector((state: RootState) => state.form);
	const [tabsValue, setTabsValue] = useState<TabsValue>('questions');
	const questionsTabRef = useRef<HTMLLabelElement>(null);
	const answersTabRef = useRef<HTMLLabelElement>(null);
	const settingsTabRef = useRef<HTMLLabelElement>(null);
	const [tabsCursorLeftPosition, setTabsCursorLeftPosition] = useState<number>(0);
	useEffect(() => {
		if (tabsValue === 'questions')
			setTabsCursorLeftPosition(questionsTabRef.current?.getBoundingClientRect().left ?? 0);
		if (tabsValue === 'answers')
			setTabsCursorLeftPosition(answersTabRef.current?.getBoundingClientRect().left ?? 0);
		if (tabsValue === 'settings')
			setTabsCursorLeftPosition(settingsTabRef.current?.getBoundingClientRect().left ?? 0);
	}, [tabsValue, questionsTabRef, answersTabRef, settingsTabRef]);
	return (
		<React.Fragment>
			<div className={styles.tabs}>
				<label ref={questionsTabRef} className={styles.tabs__tab}>
					<input
						type={'radio'}
						name={'dynamic_zone_tabs'}
						value={'questions'}
						checked={tabsValue === 'questions'}
						onChange={() => setTabsValue('questions')}
					/>
					Questions
				</label>
				<label ref={answersTabRef} className={styles.tabs__tab}>
					<input
						type={'radio'}
						name={'dynamic_zone_tabs'}
						value={'answers'}
						checked={tabsValue === 'answers'}
						onChange={() => setTabsValue('answers')}
					/>
					Answers
				</label>
				<label ref={settingsTabRef} className={styles.tabs__tab}>
					<input
						type={'radio'}
						name={'dynamic_zone_tabs'}
						value={'settings'}
						checked={tabsValue === 'settings'}
						onChange={() => setTabsValue('settings')}
					/>
					Settings
				</label>
				<span
					style={{ left: `${tabsCursorLeftPosition}px` }}
					className={styles.tabs__cursor}
				/>
			</div>
			<style
				dangerouslySetInnerHTML={{
					__html: `
						.${styles.tabs__tab}:hover {
							background-color: ${form.backgroundColor};
						}
						.${styles.tabs__cursor} {
							background-color: ${form.themeColor};
						}
					`,
				}}
			/>
		</React.Fragment>
	);
};

export default Tabs;
