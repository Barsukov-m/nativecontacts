import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ContactInterface } from 'types/navigationTypes';

const contactsApi = createApi({
	reducerPath: 'contactsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://dummyjson.com/',
	}),
	endpoints: (builder) => ({
		fetchContacts: builder.query<ContactInterface[], void>({
			query: () => 'users',
			transformResponse: (res: { users: ContactInterface[] }) => res.users,
		}),
	}),
});

export const addContact = (contact: ContactInterface) => {
	return contactsApi.util.updateQueryData(
		'fetchContacts',
		undefined,
		(state) => {
			state.push(contact);
		}
	);
};

export const removeContact = (id: number) => {
	return contactsApi.util.updateQueryData(
		'fetchContacts',
		undefined,
		(state) => {
			state = state.filter((contact) => contact.id !== id);
		}
	);
};

export const { useFetchContactsQuery } = contactsApi;

export default contactsApi;
