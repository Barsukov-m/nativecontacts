import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import contactsApi from './apis/contacts';
import profileReducer from './slices/profileSlice';

export const setupStore = (preloadedState = {}) => {
	return configureStore({
		reducer: {
			[contactsApi.reducerPath]: contactsApi.reducer,
			profile: profileReducer,
		},
		preloadedState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(contactsApi.middleware),
	});
};

export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
