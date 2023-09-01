import { PayloadAction } from '@reduxjs/toolkit';
import { ContactInterface } from 'types/navigationTypes';

type SetProfileAction = PayloadAction<ContactInterface>;

export const setProfile = (
	state: ContactInterface,
	{ payload: profile }: SetProfileAction
) => {
	state = profile;
};
