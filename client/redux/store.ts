import { configureStore } from '@reduxjs/toolkit';
import credentialsReducer from './features/credentialsSlice';
import settingsReducer from './features/settingsSlice';

export const store = configureStore({
	reducer: {
		credentials: credentialsReducer,
		settings: settingsReducer
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;