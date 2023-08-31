import { Alert } from 'react-native';
import { ContactInterface } from '../types/navigationTypes';

export const capitalizeFirstLetter = (text: string): string => {
  return text[0].toUpperCase() + text.slice(1);
};

export const getHeaderTitleByContact = (contact: ContactInterface) => {
  const firstName = capitalizeFirstLetter(contact.name.first);
  const lastName = capitalizeFirstLetter(contact.name.last);
  return `${firstName} ${lastName}`;
};

export const wipWarning = () => {
  Alert.alert('Work in Progress 🤫');
};
