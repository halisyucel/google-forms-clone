import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import HelpIcon from '@mui/icons-material/Help';
import { IconButton } from '@mui/material';
import styles from '../../styles/components/home.footer.module.scss';
import {Link} from 'react-router-dom';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__social_media}>
				<span className={styles.footer__social_media__blog}>
					Follow our&nbsp;
					<a
						href={'https://cloud.google.com/blog/products/workspace'}
						target={'_blank'}
						rel={'noopener noreferrer'}
					>
						Blog
					</a>
				</span>
				<a
					className={styles.footer__social_media__icon_link}
					href={'https://www.youtube.com/channel/UCBmwzQnSoj9b6HzNmFrg_yw'}
					target={'_blank'}
					rel={'noopener noreferrer'}
				>
					<IconButton>
						<YouTubeIcon />
					</IconButton>
				</a>
				<a
					className={styles.footer__social_media__icon_link}
					href={'https://twitter.com/googledocs'}
					target={'_blank'}
					rel={'noopener noreferrer'}
				>
					<IconButton>
						<TwitterIcon />
					</IconButton>
				</a>
				<a
					className={styles.footer__social_media__icon_link}
					href={'https://www.facebook.com/GoogleDocs/'}
					target={'_blank'}
					rel={'noopener noreferrer'}
				>
					<IconButton>
						<FacebookIcon />
					</IconButton>
				</a>
			</div>
			<div className={styles.footer__links}>
				<a
					href={'https://www.google.com/'}
					target={'_blank'}
					rel={'noopener noreferrer'}
				>
					<img src={'/clone.svg'} alt={'Google'} />
				</a>
				<Link to={'/just-clone'}>About Google</Link>
				<Link to={'/just-clone'}>Google products</Link>
				<Link to={'/just-clone'}>Privacy</Link>
				<Link to={'/just-clone'}>Terms</Link>
				<div style={{ flex: '1' }} />
				<Link to={'/just-clone'}><HelpIcon />Help</Link>
			</div>
		</footer>
	);
};

export default Footer;
