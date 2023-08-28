import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomHeader from '../components/CustomHeader/CustomHeader';

// Screens
import { NewContactScreen } from '../screens/NewContact';

const Stack = createNativeStackNavigator();

const NewContactStack = () => {
  return (
    <Stack.Navigator initialRouteName="NewContact">
      <Stack.Screen
        name="New Contact"
        component={NewContactScreen}
        options={({ navigation, route }) =>
          CustomHeader({
            navigation,
            route,
            title: 'New Contact',
          })
        }
      />
    </Stack.Navigator>
  );
};

export default NewContactStack;
