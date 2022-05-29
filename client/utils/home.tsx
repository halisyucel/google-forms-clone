import useScrollTrigger from '@mui/material/useScrollTrigger';
import React, { cloneElement, ReactElement } from 'react';
import styles from '../styles/components/home.workspace-pop-up.module.scss';

export interface ElevationScrollProps {
	window?: () => Window;
	children: ReactElement;
}

export interface WorkspaceTool {
	name: string;
	icon: string;
	description: string;
	url: string;
}

export const tools: WorkspaceTool[] = [
	{
		name: 'Drive',
		icon: '/workspace-tool-drive.svg',
		description: 'Cloud Storage',
		url: 'https://www.google.com/drive/',
	},
	{
		name: 'Gmail',
		icon: '/workspace-tool-gmail.svg',
		description: 'Custom Business Email',
		url: 'https://www.google.com/gmail/about/',
	},
	{
		name: 'Meet',
		icon: '/workspace-tool-meet.svg',
		description: 'Video and voice conferencing',
		url: 'https://apps.google.com/meet/',
	},
	{
		name: 'Calendar',
		icon: '/workspace-tool-calendar.svg',
		description: 'Shared Calendars',
		url: 'https://workspace.google.com/products/calendar/',
	},
	{
		name: 'Docs',
		icon: '/workspace-tool-docs.svg',
		description: 'Word Processing',
		url: 'https://www.google.com/docs/about/',
	},
	{
		name: 'Sheets',
		icon: '/workspace-tool-sheets.svg',
		description: 'Spreadsheets',
		url: 'https://www.google.com/sheets/about/',
	},
	{
		name: 'Slides',
		icon: '/workspace-tool-slides.svg',
		description: 'Presentation Builder',
		url: 'https://www.google.com/slides/about/',
	},
	{
		name: 'Forms',
		icon: '/workspace-tool-forms.svg',
		description: 'Survey Builder',
		url: 'https://www.google.com/forms/about/',
	},
];

export function mapTools(tools: WorkspaceTool[]): JSX.Element[] {
	return tools.map((item: WorkspaceTool, index: number) => (
		<a
			key={index}
			className={styles.workspace_pop_up__paper__tools__column__tool}
			href={item.url}
			target={'_blank'}
			rel={'noopener noreferrer'}
		>
			<img src={item.icon} alt={item.name} />
			<div className={styles.workspace_pop_up__paper__tools__column__tool__content}>
				<p>{item.name}</p>
				<p>{item.description}</p>
			</div>
		</a>
	));
}

export function ElevationScroll(props: ElevationScrollProps) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});
	return cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}
