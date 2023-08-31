import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import NewContactStack from './NewContactStack';
import MeStack from './MeStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="ContactsDrawer"
        component={TabNavigator}
        options={{
          drawerLabel: 'Go to Contacts',
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="NewContactDrawer"
        component={NewContactStack}
        options={{
          drawerLabel: 'Create New Contact',
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="MeDrawer"
        component={MeStack}
        options={{
          drawerLabel: 'Profile',
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
