import CloseIcon from '@mui/icons-material/Close';
import { Paper } from '@mui/material';
import React from 'react';
import styles from '../../styles/components/home.workspace-pop-up.module.scss';
import { mapTools, tools } from '../../utils/home';

export interface WorkspacePopUpProps {
	onClose: (value: boolean) => void;
	isOpen: boolean;
}

const WorkspacePopUp = (props: WorkspacePopUpProps) => {
	return (
		<div
			className={styles.workspace_pop_up}
			style={{
				display: props.isOpen ? 'block' : 'none',
			}}
		>
			<div
				className={styles.workspace_pop_up__background}
				onClick={() => props.onClose(false)}
			/>
			<Paper
				elevation={0}
				className={styles.workspace_pop_up__paper}
				square={true}
				variant={'outlined'}
			>
				<span
					onClick={() => props.onClose(false)}
					className={styles.workspace_pop_up__paper__close_button}
				>
					<CloseIcon />
				</span>
				<div className={styles.workspace_pop_up__paper__tools}>
					<div className={styles.workspace_pop_up__paper__tools__column}>
						{mapTools(tools.slice(0, 4))}
					</div>
					<div className={styles.workspace_pop_up__paper__tools__column}>
						{mapTools(tools.slice(4, 8))}
					</div>
				</div>
				<div className={styles.workspace_pop_up__paper__brand}>
					<img src={'/google-brand.svg'} alt={'Google Workspace'} />
					<div className={styles.workspace_pop_up__paper__brand__content}>
						<p>Google Workspace</p>
						<p>
							An integrated suit of secure, cloud-native collaboration and
							productivity apps powered by Google AI.
						</p>
						<p>
							<a
								href={'https://workspace.google.com/'}
								target={'_blank'}
								rel={'noopener noreferrer'}
							>
								Learn More
							</a>
						</p>
					</div>
				</div>
			</Paper>
		</div>
	);
};

export default WorkspacePopUp;
