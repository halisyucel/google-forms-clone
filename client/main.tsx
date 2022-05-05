import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import Password from './pages/sign-in/password';
import 'normalize.css';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path={'/sign-in'} element={<SignIn />} />
				<Route path={'/sign-up'} element={<SignUp />} />
				<Route path={'/sign-in/password/:username'} element={<Password />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);