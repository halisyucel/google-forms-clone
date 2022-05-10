import React, { SyntheticEvent, useState } from 'react';
import { AppBar, Button, Tab, Tabs } from '@mui/material';
import { ElevationScroll } from '../../lib/home';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import WorkspacePopUp from './workspace-pop-up';
import styles from '../../styles/components/home.header.module.scss';

const Header = () => {
	const navigate = useNavigate();
	const [tab, setTab] = useState<number>(0);
	const [toolsIsOpen, setToolsIsOpen] = useState<boolean>(false);
	return (
		<ElevationScroll>
			<AppBar className={styles.header}>
				<Link
					to={'/'}
					className={styles.header__logo}>
					<img
						src={'/logo.svg'}
						alt={'Google Forms Clone'}
					/>
				</Link>
				<Tabs
					value={tab}
					onChange={(_event: SyntheticEvent, value: number) => setTab(value)}
					className={styles.header__tabs}
				>
					<Tab label={'Overview'} className={styles.header__tabs__tab} />
					<Tab label={'Features'} className={styles.header__tabs__tab} />
					<Tab label={'Security'} className={styles.header__tabs__tab} />
					<Tab label={'Pricing'} className={styles.header__tabs__tab} />
				</Tabs>
				<div style={{ flex: '1' }} />
				<div className={styles.header__buttons}>
					<Button
						size={'large'}
						className={styles.header__buttons__button}
						onClick={() => setToolsIsOpen(!toolsIsOpen)}
					>
						More Tools
						<ArrowBackIosIcon className={styles.header__buttons__button__icon} />
					</Button>
					<Button
						size={'large'}
						className={styles.header__buttons__button}
						onClick={() => navigate('/sign-in')}
					>
						Sign in
					</Button>
					<Button
						size={'large'}
						className={styles.header__buttons__button}
						variant={'outlined'}
						onClick={() => navigate('/dashboard')}
					>
						Go to Forms
					</Button>
					<Button
						size={'large'}
						className={styles.header__buttons__button}
						variant={'contained'}
						disableElevation={true}
						onClick={() => navigate('/dashboard')}
					>
						Try Forms for Work
					</Button>
				</div>
				<WorkspacePopUp onClose={setToolsIsOpen} isOpen={toolsIsOpen} />
			</AppBar>
		</ElevationScroll>
	);
};

export default Header;