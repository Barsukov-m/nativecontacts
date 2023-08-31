import { PayloadAction } from '@reduxjs/toolkit';
import { ContactInterface } from 'types/navigationTypes';

type SetProfileAction = PayloadAction<ContactInterface>;

export const setProfile = (
	state: { profile: ContactInterface },
	action: SetProfileAction
) => {
	state = { profile: action.payload };
};
