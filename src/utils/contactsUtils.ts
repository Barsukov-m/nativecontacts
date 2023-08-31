import { Alert } from 'react-native';
import { ContactInterface } from '../types/navigationTypes';

export const capitalizeFirstLetter = (text: string): string => {
	return text[0].toUpperCase() + text.slice(1);
};

export const getHeaderTitleByContact = (contact: ContactInterface) => {
	const firstName = contact.firstName
		? capitalizeFirstLetter(contact.firstName)
		: '';
	const lastName = contact.lastName
		? capitalizeFirstLetter(contact.lastName)
		: '';
	return `${firstName} ${lastName}`;
};

export const wipWarning = () => {
	Alert.alert(
		'Work in Progress 🤫',
		'This feature is currently in development'
	);
};
