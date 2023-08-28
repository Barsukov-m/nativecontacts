import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import { MyTheme } from '../themes/';

const AppNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
