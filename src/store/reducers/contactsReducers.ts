import { PayloadAction } from '@reduxjs/toolkit';
import { ContactInterface } from 'types/navigationTypes';

type AddContactAction = PayloadAction<ContactInterface>;
type RemoveContactAction = PayloadAction<number>;

export const addContact = (
  state: ContactInterface[],
  action: AddContactAction
) => {
  state.push(action.payload);
};

export const removeContact = (
  state: ContactInterface[],
  action: RemoveContactAction
) => {
  const { payload: index } = action;
  state.splice(index, 1);
};
