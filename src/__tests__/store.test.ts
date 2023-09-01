import { screen } from '@testing-library/react-native';
import mockContacts from '../mocks/contacts';
import profileSlice from 'store/slices/profileSlice';
import { setProfile, store } from 'store';
import { ContactInterface } from 'types/navigationTypes';
import profile from 'mocks/profile';

describe('profile slice', () => {
	it('should handle initial state', () => {
		expect(profileSlice.getInitialState()).toEqual(profile);
	});

	it('should handle setProfile', async () => {
		const newProfile: ContactInterface = {
			firstName: 'Terry',
			lastName: 'Medhurst',
			phone: '+63 791 675 8914',
		};

		store.dispatch(setProfile(newProfile));

		expect(store.getState().profile).toEqual(newProfile);
	});
});

// describe('test API calls', () => {
// 	it('should return a list of contacts on a successful API call', async () => {
// 		// test https://dummyjson.com/users
// 		// Terry Medhurst

// 	});
// });

// describe('test Redux store', () => {
// 	it('fetches a list of contacts ', () => {
// 		// expect(screen.getByText('Terry Medhurst')).toBeTruthy();
// 	});

// 	//
// });
