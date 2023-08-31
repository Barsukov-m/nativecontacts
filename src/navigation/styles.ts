import { StyleSheet } from 'react-native';
import colors from '../constants/themeColors';

export default StyleSheet.create({
  header: {
    backgroundColor: colors.background,
  },
  headerText: {
    color: colors.primaryText,
  },
  headerIcon: {
    fontWeight: 500,
    fontSize: 24,
    color: colors.dimmedText,
    paddingRight: 30,
  },
});
