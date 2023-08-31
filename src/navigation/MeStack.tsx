import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomHeader } from '../components/CustomHeader';
import { ContactInterface } from '../types/navigationTypes';
import { me } from '../db/data';
import { getHeaderTitleByContact } from '../utils/contacts';

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
        options={({ navigation, route }) => ({
          header: () => {
            const { contact } = route.params as { contact: ContactInterface };
            const title = getHeaderTitleByContact(contact);

            return (
              <CustomHeader
                navigation={navigation}
                route={route}
                title={title}
              />
            );
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default MeStack;
