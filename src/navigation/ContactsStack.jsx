import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomHeader } from '../components/CustomHeader';
import { capitalizeFirstLetter } from '../utils/contacts';

// Screens
import { ContactsScreen } from '../screens/Contacts';
import { DetailsScreen } from '../screens/Details';

const Stack = createNativeStackNavigator();

const ContactsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={ContactsScreen}
        options={({ navigation, route }) =>
          CustomHeader({
            navigation,
            route,
            title: 'Native Contacts',
          })
        }
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ navigation, route }) => {
          const { contact } = route.params;
          const firstName = capitalizeFirstLetter(contact.name.first);
          const lastName = capitalizeFirstLetter(contact.name.last);

          return CustomHeader({
            navigation,
            route,
            title: `${firstName} ${lastName}`,
          });
        }}
      />
    </Stack.Navigator>
  );
};

export default ContactsStack;
