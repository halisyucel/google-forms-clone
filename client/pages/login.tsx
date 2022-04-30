import React from 'react';
import {Card, CardContent, TextField} from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className={'login'}>
			<Card className={'login__card'} variant={'outlined'}>
				<CardContent className={'login__card__content'}>
					<div className={'login__card__header'}>
						<img
							src={'/public/clone.svg'}
							alt={'Google Logo'}
							className={'login__card__header__logo'}
						/>
						<div className={'login__card__header__texts'}>
							<div className={'login__card__header__texts__login'}>
								Sign in
							</div>
							<div className={'login__card__header__texts__continue'}>
								Continue Google Forms
							</div>
						</div>
					</div>
					<div className={'login__card__body'}>
						<TextField
							error={false}
							className={'login__card__body__input'}
							label={'Email or phone'}
							variant={'outlined'}
						/>
						<Link
							to={'/its-just-a-clone-app'}
							className={'login__card__body__forget_email'}
						>
							Forgot email?
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default Login;
