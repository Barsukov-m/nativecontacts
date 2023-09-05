import { waitFor } from '@testing-library/react-native';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { initServer } from 'mocks/server';
import {
	useFetchContactsQuery,
	useAddContactMutation,
	useRemoveContactMutation,
} from 'store/apis/contacts';
import { ProfileInterface, setProfile } from 'store/slices/profileSlice';
import profileReducer from 'store/slices/profileSlice';
import { renderHookWithProviders } from 'utils/reduxTestUtils';
import { ContactInterface } from 'types/navigationTypes';
import mockProfile from 'mocks/profile';
import mockContacts from 'mocks/contacts';

interface ContactApiResponse {
	data?: ContactInterface;
	error?: FetchBaseQueryError | SerializedError;
	status?: number;
}

initServer();

describe('profile slice', () => {
	it('should handle profile initial state', () => {
		expect(profileReducer(undefined, { type: undefined })).toMatchObject(
			mockProfile
		);
	});

	it('should handle setProfile', async () => {
		const initialState: ProfileInterface = {
			profile: mockProfile.profile,
		};

		const newProfile: ProfileInterface = {
			profile: {
				firstName: 'Terry',
				lastName: 'Medhurst',
				phone: '+63 791 675 8914',
			},
		};

		console.log('DEBUG:', profileReducer(initialState, setProfile(newProfile)));

		expect(profileReducer(initialState, setProfile(newProfile))).toMatchObject({
			profile: newProfile,
		});
	});
});

describe('contacts API', () => {
	it('fetches a list of contacts on successful API call', async () => {
		const { result } = renderHookWithProviders(() => useFetchContactsQuery());
		await waitFor(() => expect(result.current.isFetching).toBe(false));

		expect(result.current.data).toMatchObject(mockContacts);
	});

	it('adds a new contact to the phonebook', async () => {
		const { result } = renderHookWithProviders(() => useAddContactMutation());
		const [addContact] = result.current;

		// Terry Medhurst
		const newContact: ContactInterface = mockContacts[0];

		await waitFor(async () => {
			const addContactResponse: ContactApiResponse = await addContact(
				newContact
			);

			expect(addContactResponse.data).toMatchObject(mockContacts[0]);
		});
	});

	it('removes a contact by given ID from the phonebook', async () => {
		const { result } = renderHookWithProviders(() =>
			useRemoveContactMutation()
		);
		const [removeContact] = result.current;

		// id: 1 (Terry Medhurst)
		const contactID = 1;

		await waitFor(async () => {
			const removeContactResponse: ContactApiResponse = await removeContact(
				contactID
			);
			const { data } = removeContactResponse;

			if (data) {
				expect(data.id).toEqual(mockContacts[0].id);
			} else {
				throw new Error('Error removing contact');
			}
		});
	});

	it('error removing a contact because of the wrong ID', async () => {
		const { result } = renderHookWithProviders(() =>
			useRemoveContactMutation()
		);
		const [removeContact] = result.current;

		// ID out of range
		const contactID = 15;

		await waitFor(async () => {
			const removeContactResponse: ContactApiResponse = await removeContact(
				contactID
			);
			const { error } = removeContactResponse;

			if (error && 'status' in error) {
				expect(error.status).toEqual(404);
			} else {
				throw new Error('Error removing contact');
			}
		});
	});
});
