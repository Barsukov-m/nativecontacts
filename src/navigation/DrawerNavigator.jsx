import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import ContactsStack from './ContactsStack';
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
          drawerLabel: 'Contacts',
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="NewContactDrawer"
        component={NewContactStack}
        options={{
          drawerLabel: 'New Contact',
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="MeDrawer"
        component={MeStack}
        options={{
          drawerLabel: 'Me',
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
