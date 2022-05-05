import React from 'react';
import { Card, LinearProgress } from '@mui/material';
import { Link } from 'react-router-dom';

type GoogleGlobalLayoutProps = {
	children: React.ReactNode,
	loading: boolean,
	containerClassName?: string,
};

const GoogleGlobalLayout = (props: GoogleGlobalLayoutProps) => {
	return (
		<div className={'google_global_layout'}>
			<div className={`google_global_layout__container ${props.containerClassName}`.trim()}>
				<Card className={'google_global_layout__card'} variant={'outlined'}>
					<LinearProgress
						className={'google_global_layout__card__linear_progress'}
						style={{ display: props.loading ? 'block' : 'none' }}
					/>
					<div
						className={'google_global_layout__card__loading_screen'}
						style={{ display: props.loading ? 'block' : 'none' }}
					/>
					{props.children}
				</Card>
				<div className={'google_global_layout__footer'}>
					<div style={{ flex: '1' }} />
					<Link to={'/just-clone'} className={'google_global_layout__footer__button'}>
						Help
					</Link>
					<Link to={'/just-clone'} className={'google_global_layout__footer__button'}>
						Privacy
					</Link>
					<Link to={'/just-clone'} className={'google_global_layout__footer__button'}>
						Terms
					</Link>
				</div>
			</div>
		</div>
	);
};

export default GoogleGlobalLayout;
