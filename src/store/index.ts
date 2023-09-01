import contactsApi from './apis/contacts';
import profileSlice from './slices/profileSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		[contactsApi.reducerPath]: contactsApi.reducer,
		profile: profileSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(contactsApi.middleware),
});

export const { setProfile } = profileSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
