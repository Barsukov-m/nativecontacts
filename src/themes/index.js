import { DefaultTheme } from '@react-navigation/native';
import themeColors from '../constants/themeColors';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...themeColors,
  },
};

export { MyTheme };
