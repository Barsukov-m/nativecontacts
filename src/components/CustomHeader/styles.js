import { StyleSheet } from 'react-native';
import colors from '../../constants/themeColors';

export default StyleSheet.create({
  header: {
    backgroundColor: colors.background,
  },
  headerIcon: {
    fontWeight: 500,
    fontSize: 24,
    color: colors.dimmedText,
  },
  headerLeftAction: {
    paddingRight: 30,
  },
  headerEditBtn: {
    fontSize: 20,
  },
});
