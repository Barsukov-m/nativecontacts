import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import { capitalizeFirstLetter } from '../utils/contacts';
import { me } from '../data';

// Screens
import { DetailsScreen } from '../screens/Details';

const Stack = createNativeStackNavigator();

const MeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Me">
      <Stack.Screen
        name="Me"
        component={DetailsScreen}
        initialParams={{ contact: me }}
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

export default MeStack;
