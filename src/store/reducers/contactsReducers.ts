import { PayloadAction } from '@reduxjs/toolkit';
import { ContactInterface } from 'types/navigationTypes';

type AddContactAction = PayloadAction<ContactInterface>;
type RemoveContactAction = PayloadAction<number>;
type SetContactsAction = PayloadAction<ContactInterface[]>;

export const addContact = (
	state: { contacts: ContactInterface[] },
	action: AddContactAction
) => {
	state.contacts.push(action.payload);
};

export const removeContact = (
	state: { contacts: ContactInterface[] },
	action: RemoveContactAction
) => {
	const { payload: id } = action;
	state.contacts = state.contacts.filter((contact) => contact.id !== id);
};

export const setContacts = (
	state: { contacts: ContactInterface[] },
	action: SetContactsAction
) => {
	const { payload: contacts } = action;
	return contacts;
};
