import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface ScreenProps {
	navigation: NativeStackNavigationProp<any>;
}

export interface ContactInterface {
	id?: number;
	firstName: string;
	lastName: string;
	maidenName?: string;
	age?: number;
	gender?: string;
	email?: string;
	phone: string;
	username?: string;
	birthDate?: string;
	image?: string;
	address?: {
		address?: string;
		city: string;
		state?: string;
	};
	university?: string;
	company?: {
		name: string;
	};
}
