import React, { ChangeEvent } from 'react';
import { Avatar, Button, CardActions, CardContent, Checkbox, Chip, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import GoogleGlobalLayout from '../../components/google-global-layout';
import usePassword from '../../hooks/usePassword';

const Password = () => {
	const {
		params,
		loading,
		password,
		showPassword,
		passwordHelperText,
		handleSubmit,
		setPassword,
		setShowPassword,
	} = usePassword();
	return (
		<GoogleGlobalLayout containerClassName={'password__container'} loading={loading}>
			<CardContent className={'password__content'}>
				<div className={'password__content__header'}>
					<img
						src={'/clone.svg'}
						alt={'Google Logo'}
						className={'password__content__header__logo'}
					/>
					<div className={'password__content__header__texts'}>
						<div className={'password__content__header__texts__welcome'}>
							Welcome
						</div>
						<Link to={'/sign-in'}>
							<Chip
								className={'password__content__header__texts__chip'}
								avatar={<Avatar>{params.username?.slice(0,1).toUpperCase()}</Avatar>}
								label={`${params.username}@gmail.com`}
								variant={'outlined'}
							/>
						</Link>
					</div>
				</div>
				<div className={'password__content__body'}>
					<TextField
						id={'password_input'}
						className={'password__content__body__input'}
						label={'Enter your password'}
						type={showPassword ? 'text' : 'password'}
						variant={'outlined'}
						error={password.error}
						value={password.value}
						spellCheck={false}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword({ value: e.target.value, error: password.error })}
						onKeyPress={(e) => (e.key === 'Enter') && handleSubmit()}
					/>
					{passwordHelperText}
					<label className={'show_password'}>
						<Checkbox checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
						<span>Show password</span>
					</label>
				</div>
			</CardContent>
			<CardActions className={'password__footer'}>
				<Link to={'/just-clone'}>
					<Button
						className={'password__footer__button'}
					>
						Forgot password?
					</Button>
				</Link>
				<Button
					variant={'contained'}
					className={'password__footer__button'}
					onClick={handleSubmit}
					disableElevation={true}
				>
					Next
				</Button>
			</CardActions>
		</GoogleGlobalLayout>
	);
};

export default Password;
