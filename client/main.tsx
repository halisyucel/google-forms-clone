import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Home from './pages/home';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import Password from './pages/sign-in/password';
import Dashboard from './pages/dashboard';
import Error from './pages/error';
import NotFound from './pages/not-found';
import Example from './pages/example';
import JustClone from './pages/just-clone';
import 'normalize.css';
import './styles/globals.scss';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/sign-in'} element={<SignIn />} />
				<Route path={'/sign-in/password/:username'} element={<Password />} />
				<Route path={'/sign-up'} element={<SignUp />} />
				<Route path={'/dashboard'} element={<Dashboard />} />
				<Route path={'/example'} element={<Example />} />
				<Route path={'/just-clone'} element={<JustClone />} />
				<Route path={'/error'} element={<Error />} />
				<Route path={'*'} element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</Provider>
);
