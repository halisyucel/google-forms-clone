import 'normalize.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ImageSelector from './components/global/image-selector';
import Snackbar from './components/global/snackbar';
import Dashboard from './pages/dashboard';
import Editor from './pages/dashboard/editor';
import Search from './pages/dashboard/search';
import Error from './pages/error';
import Example from './pages/example';
import Form from './pages/form';
import Preview from './pages/form/preview';
import Home from './pages/home';
import JustClone from './pages/just-clone';
import NotFound from './pages/not-found';
import SignIn from './pages/sign-in';
import Password from './pages/sign-in/password';
import SignUp from './pages/sign-up';
import { store } from './redux/store';
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
				<Route path={'/dashboard/search/:query'} element={<Search />} />
				<Route path={'/dashboard/editor/:id'} element={<Editor />} />
				<Route path={'/form/:id'} element={<Form />} />
				<Route path={'/form/preview/:id'} element={<Preview />} />
				<Route path={'/example'} element={<Example />} />
				<Route path={'/just-clone'} element={<JustClone />} />
				<Route path={'/error'} element={<Error />} />
				<Route path={'*'} element={<NotFound />} />
			</Routes>
		</BrowserRouter>
		<Snackbar />
		<ImageSelector />
	</Provider>,
);
