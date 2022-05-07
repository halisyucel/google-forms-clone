import React, { ChangeEvent } from 'react';
import { Avatar, Button, CardActions, CardContent, Checkbox, Chip, TextField } from '@mui/material';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import GoogleCardLayout from '../../components/global/google-card-layout';
import usePassword from '../../hooks/usePassword';
import styles from '../../styles/pages/sign-in.password.module.scss';

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
		<GoogleCardLayout containerClassName={styles.password__container} loading={loading}>
			<Helmet>
				<title>Google Forms Clone: Sign-in</title>
			</Helmet>
			<CardContent className={styles.password__content}>
				<div className={styles.password__content__header}>
					<img
						src={'/clone.svg'}
						alt={'Google Logo'}
						className={styles.password__content__header__logo}
					/>
					<div className={styles.password__content__header__texts}>
						<div className={styles.password__content__header__texts__welcome}>
							Welcome
						</div>
						<Link to={'/sign-in'}>
							<Chip
								className={styles.password__content__header__texts__chip}
								avatar={<Avatar>{params.username?.slice(0,1).toUpperCase()}</Avatar>}
								label={`${params.username}@gmail.com`}
								variant={'outlined'}
							/>
						</Link>
					</div>
				</div>
				<div className={styles.password__content__body}>
					<TextField
						id={'password_input'}
						className={styles.password__content__body__input}
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
			<CardActions className={styles.password__footer}>
				<Link to={'/just-clone'}>
					<Button
						className={styles.password__footer__button}
					>
						Forgot password?
					</Button>
				</Link>
				<Button
					variant={'contained'}
					className={styles.password__footer__button}
					onClick={handleSubmit}
					disableElevation={true}
				>
					Next
				</Button>
			</CardActions>
		</GoogleCardLayout>
	);
};

export default Password;
