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
		addContact: builder.mutation<ContactInterface, Partial<ContactInterface>>({
			query: (contact: ContactInterface) => ({
				url: 'users/add',
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(contact),
			}),
			onQueryStarted: (newContact, { dispatch, queryFulfilled }) => {
				queryFulfilled.then(({ data }) => {
					dispatch(
						contactsApi.util.updateQueryData(
							'fetchContacts',
							undefined,
							(contacts) => {
								contacts.push(data);
							}
						)
					);
				});
			},
		}),
		removeContact: builder.mutation<ContactInterface, Partial<number>>({
			query: (id: number) => ({
				url: `users/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useFetchContactsQuery,
	useAddContactMutation,
	useRemoveContactMutation,
} = contactsApi;

export default contactsApi;
