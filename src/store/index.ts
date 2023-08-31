import contactsSlice from './slices/contactsSlice';
import profileSlice from './slices/profileSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		contacts: contactsSlice.reducer,
		profile: profileSlice.reducer,
	},
});

export const { addContact, removeContact } = contactsSlice.actions;
export const { setProfile } = profileSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
