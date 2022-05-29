import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {
	Divider,
	Drawer as MUIDrawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSetting } from '../../redux/actions';
import styles from '../../styles/components/dashboard.drawer.module.scss';
import { PopupProps } from '../../utils/types';

// todo: add a link to the help page

const Drawer = (props: PopupProps) => {
	const dispatch = useDispatch();
	return (
		<MUIDrawer
			anchor={'left'}
			open={props.isOpen}
			onClose={props.onClose}
			className={styles.drawer}
		>
			<div className={styles.drawer__title}>
				<Link to={'/'}>
					<img src={'/clone.svg'} alt={'Google Forms Clone'} />
				</Link>
			</div>
			<List className={styles.drawer__list}>
				<Divider className={styles.drawer__list__divider} />
				<a
					href={'https://www.google.com/docs/about/'}
					target={'_blank'}
					rel={'noopener noreferrer'}
				>
					<ListItem
						className={styles.drawer__list__item}
						disablePadding={true}
						dense={true}
					>
						<ListItemButton>
							<ListItemIcon className={styles.drawer__list__item_icon}>
								<img src={'/workspace-tool-docs.svg'} alt={'Google Docs'} />
							</ListItemIcon>
							<ListItemText
								className={styles.drawer__list__item_text}
								primary={'Docs'}
							/>
						</ListItemButton>
					</ListItem>
				</a>
				<a
					href={'https://www.google.com/sheets/about/'}
					target={'_blank'}
					rel={'noopener noreferrer'}
				>
					<ListItem
						className={styles.drawer__list__item}
						disablePadding={true}
						dense={true}
					>
						<ListItemButton>
							<ListItemIcon className={styles.drawer__list__item_icon}>
								<img src={'/workspace-tool-sheets.svg'} alt={'Google Sheets'} />
							</ListItemIcon>
							<ListItemText
								className={styles.drawer__list__item_text}
								primary={'Sheets'}
							/>
						</ListItemButton>
					</ListItem>
				</a>
				<a
					href={'https://www.google.com/slides/about/'}
					target={'_blank'}
					rel={'noopener noreferrer'}
				>
					<ListItem
						className={styles.drawer__list__item}
						disablePadding={true}
						dense={true}
					>
						<ListItemButton>
							<ListItemIcon className={styles.drawer__list__item_icon}>
								<img src={'/workspace-tool-slides.svg'} alt={'Google Slides'} />
							</ListItemIcon>
							<ListItemText
								className={styles.drawer__list__item_text}
								primary={'Slides'}
							/>
						</ListItemButton>
					</ListItem>
				</a>
				<a
					href={'https://www.google.com/forms/about/'}
					target={'_blank'}
					rel={'noopener noreferrer'}
				>
					<ListItem
						className={styles.drawer__list__item}
						disablePadding={true}
						dense={true}
					>
						<ListItemButton>
							<ListItemIcon className={styles.drawer__list__item_icon}>
								<img src={'/workspace-tool-forms.svg'} alt={'Google Forms'} />
							</ListItemIcon>
							<ListItemText
								className={styles.drawer__list__item_text}
								primary={'Forms'}
							/>
						</ListItemButton>
					</ListItem>
				</a>
				<Divider className={styles.drawer__list__divider} />
				<ListItem className={styles.drawer__list__item} disablePadding={true} dense={true}>
					<ListItemButton
						onClick={() => {
							props.onClose && props.onClose();
							dispatch(
								setSetting({
									key: 'isOpenSettingsDialog',
									value: true,
								}),
							);
						}}
					>
						<ListItemIcon className={styles.drawer__list__item_icon}>
							<SettingsOutlinedIcon />
						</ListItemIcon>
						<ListItemText
							className={styles.drawer__list__item_text}
							primary={'Settings'}
						/>
					</ListItemButton>
				</ListItem>
				<ListItem className={styles.drawer__list__item} disablePadding={true} dense={true}>
					<ListItemButton>
						<ListItemIcon className={styles.drawer__list__item_icon}>
							<HelpOutlineOutlinedIcon />
						</ListItemIcon>
						<ListItemText
							className={styles.drawer__list__item_text}
							primary={'Help and Feedback'}
						/>
					</ListItemButton>
				</ListItem>
				<Divider className={styles.drawer__list__divider} />
				<a
					href={'https://www.google.com/drive/'}
					target={'_blank'}
					rel={'noopener noreferrer'}
				>
					<ListItem
						className={styles.drawer__list__item}
						disablePadding={true}
						dense={true}
					>
						<ListItemButton>
							<ListItemIcon className={styles.drawer__list__item_icon}>
								<img src={'/workspace-tool-drive.svg'} alt={'Google Drive'} />
							</ListItemIcon>
							<ListItemText
								className={styles.drawer__list__item_text}
								primary={'Drive'}
							/>
						</ListItemButton>
					</ListItem>
				</a>
				<Divider className={styles.drawer__list__divider} />
			</List>
			<div style={{ flex: '1' }} />
			<div className={styles.drawer__links}>
				<Link to={'/just-clone'}>Privacy Policy</Link>
				&nbsp;&#8226;&nbsp;
				<Link to={'/just-clone'}>Terms of Service</Link>
			</div>
		</MUIDrawer>
	);
};

export default Drawer;
