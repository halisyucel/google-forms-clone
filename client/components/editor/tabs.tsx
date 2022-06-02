import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/editor.tabs.module.scss';

export type TabsValue = 'questions' | 'answers' | 'settings';

const Tabs = () => {
	const form = useSelector((state: RootState) => state.form);
	const [tabsValue, setTabsValue] = useState<TabsValue>('questions');
	const [tabsCursorLeftPosition, setTabsCursorLeftPosition] = useState<number>(0);
	useEffect(() => {
		if (tabsValue === 'questions') setTabsCursorLeftPosition(0);
		if (tabsValue === 'answers') setTabsCursorLeftPosition(85);
		if (tabsValue === 'settings') setTabsCursorLeftPosition(170);
	}, [tabsValue]);
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
							background-color: ${form.backgroundColor};
						}
						.${styles.tabs_section__tabs__cursor} {
							background-color: ${form.themeColor};
						}
					`,
				}}
			/>
		</React.Fragment>
	);
};

export default Tabs;
