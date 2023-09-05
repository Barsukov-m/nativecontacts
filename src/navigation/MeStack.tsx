import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomHeader } from '../components/CustomHeader';
import { useAppSelector } from 'hooks/storeHooks';
import { ContactInterface } from '../types/navigationTypes';
import { getHeaderTitleByContact } from '../utils/contactsUtils';

// Screens
import { DetailsScreen } from '../screens/Details';

const Stack = createNativeStackNavigator();

const MeStack = () => {
	const contact = useAppSelector((state) => state.profile);

	return (
		<Stack.Navigator initialRouteName="Me">
			<Stack.Screen
				name="Me"
				component={DetailsScreen}
				initialParams={{ contact: contact.profile }}
				options={({ navigation, route }) => ({
					header: () => {
						const { contact } = route.params as { contact: ContactInterface };
						const title = getHeaderTitleByContact(contact);

						return <CustomHeader title={title} />;
					},
				})}
			/>
		</Stack.Navigator>
	);
};

export default MeStack;
