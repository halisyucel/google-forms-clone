import React from 'react';
import {Paper} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {mapTools, tools} from '../lib/home';
import {Link} from 'react-router-dom';
import { WorkspacePopUpProps } from '../lib/types';

const WorkspacePopUp = (props: WorkspacePopUpProps) => {
	return (
		<div className={'workspace_pop_up'} style={{
			display: props.isOpen ? 'block' : 'none'
		}}>
			<div
				className={'workspace_pop_up__background'}
				onClick={() => props.onClose(false)}
			/>
			<Paper
				elevation={0}
				className={'workspace_pop_up__paper'}
				square={true}
				variant={'outlined'}
			>
							<span
								onClick={() => props.onClose(false)}
								className={'workspace_pop_up__paper__close_button'}
							>
								<CloseIcon />
							</span>
				<div className={'workspace_pop_up__paper__tools'}>
					<div className={'workspace_pop_up__paper__tools__column'}>
						{mapTools(tools.slice(0, 4))}
					</div>
					<div className={'workspace_pop_up__paper__tools__column'}>
						{mapTools(tools.slice(4, 8))}
					</div>
				</div>
				<div className={'workspace_pop_up__paper__brand'}>
					<Link to={'/dashboard'}>
						<img src={'/google-brand.svg'} alt={'Google Workspace'} />
						<div className={'workspace_pop_up__paper__brand__content'}>
							<p>Google Workspace</p>
							<p>
								An integrated suit of secure, cloud-native collaboration
								and productivity apps powered by Google AI.
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
					</Link>
				</div>
			</Paper>
		</div>
	);
};

export default WorkspacePopUp;
