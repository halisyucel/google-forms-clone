import { Button, CardActions, CardContent, TextField } from '@mui/material';
import React, { ChangeEvent } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import GoogleCardLayout from '../../components/layouts/google-card-layout';
import useAuthentication from '../../hooks/useAuthentication';
import useSignIn from '../../hooks/useSignIn';
import styles from '../../styles/pages/sign-in.module.scss';

const SignIn = () => {
	const authentication = useAuthentication({ next: '/dashboard' });
	const { loading, username, usernameHelperText, handleSubmit, setUsername } = useSignIn();
	return (
		<GoogleCardLayout
			containerClassName={styles.sign_in__container}
			loading={loading || authentication.loading}
		>
			<Helmet>
				<title>Google Forms Clone: Sign-in</title>
			</Helmet>
			<CardContent className={styles.sign_in__content}>
				<div className={styles.sign_in__content__header}>
					<img
						src={'/clone.svg'}
						alt={'Google Logo'}
						className={styles.sign_in__content__header__logo}
					/>
					<div className={styles.sign_in__content__header__texts}>
						<div className={styles.sign_in__content__header__texts__sign_in}>
							Sign in
						</div>
						<div className={styles.sign_in__content__header__texts__continue}>
							Continue Google Forms
						</div>
					</div>
				</div>
				<div className={styles.sign_in__content__body}>
					<TextField
						id={'email_or_phone_input'}
						className={styles.sign_in__content__body__input}
						label={'Email or phone'}
						variant={'outlined'}
						error={username.error}
						value={username.value}
						spellCheck={false}
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							setUsername({
								value: e.target.value,
								error: username.error,
							});
						}}
						onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
					/>
					{usernameHelperText}
					<Link
						to={'/just-clone'}
						className={styles.sign_in__content__body__forgot_email}
					>
						Forgot email?
					</Link>
					<div className={styles.sign_in__content__body__information}>
						If you want to see just one form example without registration,&nbsp;
						<Link to={'/example'}>click here.</Link>
					</div>
				</div>
			</CardContent>
			<CardActions className={styles.sign_in__footer}>
				<Link to={'/sign-up'}>
					<Button className={styles.sign_in__footer__button}>Create account</Button>
				</Link>
				<Button
					variant={'contained'}
					className={styles.sign_in__footer__button}
					onClick={handleSubmit}
					disableElevation={true}
				>
					Next
				</Button>
			</CardActions>
		</GoogleCardLayout>
	);
};

export default SignIn;
