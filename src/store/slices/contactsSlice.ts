import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ContactInterface } from 'types/navigationTypes';
import { addContact, removeContact } from '../reducers/contactsReducers';
import axios from 'axios';

interface ContactsState {
	contacts: ContactInterface[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null | undefined;
}

const initialState: ContactsState = {
	contacts: [],
	status: 'idle',
	error: null,
};

// Create an async thunk for fetching contacts
export const fetchContacts = createAsyncThunk(
	'contacts/fetchContacts',
	async () => {
		return await axios
			.get('https://dummyjson.com/users')
			.then((res) => res.data.users)
			.catch((err) => {
				throw new Error(err);
			});
	}
);

export default createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		addContact,
		removeContact,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchContacts.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.contacts = action.payload;
			})
			.addCase(fetchContacts.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});
