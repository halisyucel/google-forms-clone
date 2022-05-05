import React  from 'react';
import { Button, CardActions, CardContent, Checkbox, TextField } from "@mui/material";
import { createHelperText } from '../lib/helper';
import { Link } from 'react-router-dom';
import GoogleGlobalLayout from '../components/google-global-layout';
import useSignUp from '../hooks/useSignUp';

// TODO burada da useMemo kullan

const SignUp = () => {
	const {
		loading,
		firstName,
		lastName,
		username,
		password,
		passwordConfirm,
		showPassword,
		formValidation,
		setFormInput,
		setShowPassword,
		setLoading,
		namesHelperText,
		passwordsHelperText,
		usernameHelperText
	} = useSignUp();
	return (
		<GoogleGlobalLayout containerClassName={'sign_up__container'} loading={loading}>
			<CardContent className={'sign_up__content'}>
				<div className={'sign_up__content__header'}>
					<img
						src={'/clone.svg'}
						alt={'Google Logo'}
						className={'sign_up__content__header__logo'}
					/>
					<div className={'sign_up__content__header__texts'}>
						Create your Google Account
					</div>
				</div>
				<div className={'sign_up__content__body'}>
					<div className={'sing_up__content__body__form'}>
						<div className={'sign_up__content__body__form__input_area'}>
							<TextField
								className={'sign_up__content__body__form__input_area__input'}
								size={'small'}
								label={'First Name'}
								name={'firstName'}
								spellCheck={false}
								error={firstName.error}
								value={firstName.value}
								onChange={(e) => setFormInput('firstName', 'value', e.target.value)}
								autoComplete={'off'}
							/>
							<TextField
								className={'sign_up__content__body__form__input_area__input'}
								size={'small'}
								label={'Last Name'}
								name={'lastName'}
								spellCheck={false}
								error={lastName.error}
								value={lastName.value}
								onChange={(e) => setFormInput('lastName', 'value', e.target.value)}
								autoComplete={'off'}
							/>
						</div>
						{createHelperText(namesHelperText)}
						<TextField
							className={'sign_up__content__body__form__username'}
							size={'small'}
							label={'Username'}
							name={'username'}
							spellCheck={false}
							error={username.error}
							value={username.value}
							onChange={(e) => setFormInput('username', 'value', e.target.value)}
							autoComplete={'off'}
							InputProps={{
								endAdornment: <span style={{ paddingLeft: '8px' }}>@gmail.com</span>,
							}}
						/>
						{createHelperText(usernameHelperText)}
						<div className={'sign_up__content__body__form__danger'}>
							This is just a clone app. Please do not use your real google username and password!
						</div>
						<div className={'sign_up__content__body__form__input_area'}>
							<TextField
								className={'sign_up__content__body__form__input_area__input'}
								size={'small'}
								label={'Password'}
								name={'password'}
								spellCheck={false}
								error={password.error}
								value={password.value}
								onChange={(e) => setFormInput('password', 'value', e.target.value)}
								type={showPassword ? 'text' : 'password'}
								autoComplete={'off'}
							/>
							<TextField
								className={'sign_up__content__body__form__input_area__input'}
								size={'small'}
								label={'Confirm'}
								name={'passwordConfirm'}
								spellCheck={false}
								error={passwordConfirm.error}
								value={passwordConfirm.value}
								onChange={(e) => setFormInput('passwordConfirm', 'value', e.target.value)}
								type={showPassword ? 'text' : 'password'}
								autoComplete={'off'}
							/>
						</div>
						{createHelperText(passwordsHelperText)}
						<label className={'show_password'}>
							<Checkbox checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
							<span>Show password</span>
						</label>
					</div>
					<figure className={'sing_up__content__body__image'}>
						<img src={'/account.svg'}  alt={'Google Account'}/>
						<figcaption className={'sing_up__content__body__image__caption'}>
							One account. All of Google working for you.
						</figcaption>
					</figure>
				</div>
			</CardContent>
			<CardActions className={'sign_up__footer'}>
				<Link to={'/sign-in'}>
					<Button
						className={'sign_up__footer__button'}
					>
						Sign in instead
					</Button>
				</Link>
				<Button
					variant={'contained'}
					className={'sign_up__footer__button'}
					onClick={() => (1)}
				>
					Next
				</Button>
			</CardActions>
		</GoogleGlobalLayout>
	);
};

export default SignUp;
