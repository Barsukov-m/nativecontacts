import { useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomHeader } from '../components/CustomHeader';
import { ContactInterface } from '../types/navigationTypes';
import { getHeaderTitleByContact } from '../utils/contactsUtils';

// Screens
import { ContactsScreen } from '../screens/Contacts';
import { DetailsScreen } from '../screens/Details';

const Stack = createNativeStackNavigator();

interface ContactsStackProps {
	navigation: {
		goBack?: () => void;
		openDrawer?: () => void;
	};
	route: {
		name: string;
		params?: {
			contact?: ContactInterface;
		};
	};
}

const ContactsStack = () => {
	const homeOptions = useCallback(
		({ navigation, route }: ContactsStackProps) => ({
			header: () => <CustomHeader title="Native Contacts" route={route} />,
		}),
		[]
	);

	const detailsOptions = useCallback(
		({ navigation, route }: ContactsStackProps) => ({
			header: () => {
				const { contact } = route.params as { contact: ContactInterface };
				const title = getHeaderTitleByContact(contact);

				return <CustomHeader title={title} route={route} />;
			},
		}),
		[getHeaderTitleByContact]
	);

	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={ContactsScreen}
				options={homeOptions}
			/>
			<Stack.Screen
				name="Details"
				component={DetailsScreen}
				options={detailsOptions}
			/>
		</Stack.Navigator>
	);
};

export default ContactsStack;
