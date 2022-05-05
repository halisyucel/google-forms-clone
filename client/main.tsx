import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import Password from './pages/sign-in/password';
import Dashboard from './pages/dashboard';
import Error from './pages/error';
import NotFound from './pages/not-found';
import Example from './pages/example';
import JustClone from './pages/just-clone';
import 'normalize.css';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path={'/'} element={<Dashboard />} />
				<Route path={'/sign-in'} element={<SignIn />} />
				<Route path={'/sign-in/password/:username'} element={<Password />} />
				<Route path={'/sign-up'} element={<SignUp />} />
				<Route path={'/example'} element={<Example />} />
				<Route path={'/just-clone'} element={<JustClone />} />
				<Route path={'/error'} element={<Error />} />
				<Route path={'*'} element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
