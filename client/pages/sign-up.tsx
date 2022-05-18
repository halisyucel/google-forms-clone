import React, { ChangeEvent } from 'react';
import { Button, CardActions, CardContent, Checkbox, TextField } from '@mui/material';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import GoogleCardLayout from '../components/layouts/google-card-layout';
import useSignUp from '../hooks/useSignUp';
import styles from '../styles/pages/sign-up.module.scss';

// todo buradaki formlar gerçek forma dönüştürülecek
// todo validationlar joiden geçirilicek

const SignUp = () => {
	const {
		loading,
		firstName,
		lastName,
		username,
		password,
		passwordConfirm,
		showPassword,
		handleSubmit,
		setFormInput,
		setShowPassword,
		namesHelperText,
		passwordsHelperText,
		usernameHelperText
	} = useSignUp();
	return (
		<GoogleCardLayout containerClassName={styles.sign_up__container} loading={loading}>
			<Helmet>
				<title>Google Forms Clone: Sign-up</title>
			</Helmet>
			<CardContent className={styles.sign_up__content}>
				<div className={styles.sign_up__content__header}>
					<img
						src={'/clone.svg'}
						alt={'Google Logo'}
						className={styles.sign_up__content__header__logo}
					/>
					<div className={styles.sign_up__content__header__texts}>
						Create your Google Account
					</div>
				</div>
				<div className={styles.sign_up__content__body}>
					<div className={styles.sing_up__content__body__form}>
						<div className={styles.sign_up__content__body__form__input_area}>
							<TextField
								className={styles.sign_up__content__body__form__input_area__input}
								size={'small'}
								label={'First Name'}
								name={'firstName'}
								spellCheck={false}
								error={firstName.error}
								value={firstName.value}
								onChange={(e: ChangeEvent<HTMLInputElement>) => setFormInput('firstName', 'value', e.target.value)}
								autoComplete={'off'}
							/>
							<TextField
								className={styles.sign_up__content__body__form__input_area__input}
								size={'small'}
								label={'Last Name'}
								name={'lastName'}
								spellCheck={false}
								error={lastName.error}
								value={lastName.value}
								onChange={(e: ChangeEvent<HTMLInputElement>) => setFormInput('lastName', 'value', e.target.value)}
								autoComplete={'off'}
							/>
						</div>
						{namesHelperText}
						<TextField
							className={styles.sign_up__content__body__form__username}
							size={'small'}
							label={'Username'}
							name={'username'}
							spellCheck={false}
							error={username.error}
							value={username.value}
							onChange={(e: ChangeEvent<HTMLInputElement>) => setFormInput('username', 'value', e.target.value)}
							autoComplete={'off'}
							InputProps={{
								endAdornment: <span style={{ paddingLeft: '8px' }}>@gmail.com</span>,
							}}
						/>
						{usernameHelperText}
						<div className={styles.sign_up__content__body__form__danger}>
							This is just a clone app. Please do not use your real google username and password!
						</div>
						<div className={styles.sign_up__content__body__form__input_area}>
							<TextField
								className={styles.sign_up__content__body__form__input_area__input}
								size={'small'}
								label={'Password'}
								name={'password'}
								spellCheck={false}
								error={password.error}
								value={password.value}
								onChange={(e: ChangeEvent<HTMLInputElement>) => setFormInput('password', 'value', e.target.value)}
								type={showPassword ? 'text' : 'password'}
								autoComplete={'off'}
							/>
							<TextField
								className={styles.sign_up__content__body__form__input_area__input}
								size={'small'}
								label={'Confirm'}
								name={'passwordConfirm'}
								spellCheck={false}
								error={passwordConfirm.error}
								value={passwordConfirm.value}
								onChange={(e: ChangeEvent<HTMLInputElement>) => setFormInput('passwordConfirm', 'value', e.target.value)}
								type={showPassword ? 'text' : 'password'}
								autoComplete={'off'}
								onKeyPress={(e) => (e.key === 'Enter') && handleSubmit()}
							/>
						</div>
						{passwordsHelperText}
						<label className={'show_password'}>
							<Checkbox checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
							<span>Show password</span>
						</label>
					</div>
					<figure className={styles.sing_up__content__body__image}>
						<img src={'/account.svg'}  alt={'Google Account'}/>
						<figcaption className={styles.sing_up__content__body__image__caption}>
							One account. All of Google working for you.
						</figcaption>
					</figure>
				</div>
			</CardContent>
			<CardActions className={styles.sign_up__footer}>
				<Link to={'/sign-in'}>
					<Button
						className={styles.sign_up__footer__button}
					>
						Sign in instead
					</Button>
				</Link>
				<Button
					variant={'contained'}
					className={styles.sign_up__footer__button}
					onClick={handleSubmit}
					disableElevation={true}
				>
					Next
				</Button>
			</CardActions>
		</GoogleCardLayout>
	);
};

export default SignUp;
