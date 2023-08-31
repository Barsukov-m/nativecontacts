import { createSlice } from '@reduxjs/toolkit';
import { ContactInterface } from 'types/navigationTypes';

import { addContact, removeContact } from '../reducers/contactsReducers';

const initialState: ContactInterface[] = [];

export default createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact,
    removeContact,
  },
});
