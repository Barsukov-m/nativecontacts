import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ContactInterface } from 'types/navigationTypes';

type SetProfileAction = PayloadAction<ContactInterface>;

export interface ProfileInterface {
	profile: ContactInterface;
}

const initialState: ProfileInterface = {
	profile: {
		id: 0,
		firstName: 'Mykhailo',
		lastName: 'Barsukov',
		email: 'barsukov.m23@gmail.com',
		phone: '+38 095 056 8900',
		username: 'michael',
		birthDate: '2003-09-27',
		image: 'https://avatars.githubusercontent.com/u/49040324?v=4',
		address: {
			address: 'Khreshchatyk, 22',
			city: 'Kyiv',
		},
		university: 'Kyiv Polytechnic University',
	},
};

export const profileSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		setProfile: (state: ProfileInterface, { payload: profile }) => {
			state.profile = profile;
		},
	},
});

export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;
