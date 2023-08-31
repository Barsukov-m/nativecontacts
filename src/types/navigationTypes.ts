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

// export interface ContactInterface {
//   name: {
//     title?: string;
//     first: string;
//     last: string;
//   };
//   location?: {
//     street?: string;
//     city?: string;
//     state?: string;
//     postcode?: number | string;
//   };
//   email?: string;
//   login?: {
//     username?: string;
//     password?: string;
//     salt?: string;
//     md5?: string;
//     sha1?: string;
//     sha256?: string;
//   };
//   dob?: string;
//   registered?: string;
//   phone: string;
//   cell?: string;
//   id?: {
//     name?: string;
//     value?: string | null;
//   };
//   picture?: {
//     large?: string;
//     medium?: string;
//     thumbnail?: string;
//   };
//   nat?: string;
// }
