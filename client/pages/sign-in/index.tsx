import React from 'react';
import { Button, CardActions, CardContent, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import GoogleGlobalLayout from '../../components/google-global-layout';
import useSignIn from '../../hooks/useSignIn';

const SignIn = () => {
	const {
		loading,
		username,
		usernameHelperText,
		handleSubmit,
		setUsername,
	} = useSignIn();
	return (
		<GoogleGlobalLayout containerClassName={'sign_in__container'} loading={loading}>
			<CardContent className={'sign_in__content'}>
				<div className={'sign_in__content__header'}>
					<img
						src={'/clone.svg'}
						alt={'Google Logo'}
						className={'sign_in__content__header__logo'}
					/>
					<div className={'sign_in__content__header__texts'}>
						<div className={'sign_in__content__header__texts__sign_in'}>
							Sign in
						</div>
						<div className={'sign_in__content__header__texts__continue'}>
							Continue Google Forms
						</div>
					</div>
				</div>
				<div className={'sign_in__content__body'}>
					<TextField
						id={'email_or_phone_input'}
						className={'sign_in__content__body__input'}
						label={'Email or phone'}
						variant={'outlined'}
						error={username.error}
						value={username.value}
						spellCheck={false}
						onChange={(e) => {
							setUsername({
								value: e.target.value,
								error: username.error,
							});
						}}
						onKeyPress={(e) => (e.key === 'Enter') && handleSubmit()}
					/>
					{usernameHelperText}
					<Link
						to={'/just-clone'}
						className={'sign_in__content__body__forgot_email'}
					>
						Forgot email?
					</Link>
					<div className={'sign_in__content__body__information'}>
						If you want to see just one form example without registration,&nbsp;
						<Link to={'/example'}>click here.</Link>
					</div>
				</div>
			</CardContent>
			<CardActions className={'sign_in__footer'}>
				<Link to={'/sign-up'}>
					<Button
						className={'sign_in__footer__button'}
					>
						Create account
					</Button>
				</Link>
				<Button
					variant={'contained'}
					className={'sign_in__footer__button'}
					onClick={handleSubmit}
				>
					Next
				</Button>
			</CardActions>
		</GoogleGlobalLayout>
	);
};

export default SignIn;
