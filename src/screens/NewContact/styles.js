import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../constants/themeColors';

const window = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: colors.background,
  },
  addNew: {
    alignSelf: 'center',
    backgroundColor: colors.primaryDark,
    width: window.width / 5,
    height: window.width / 5,
    marginBottom: 15,
    borderRadius: window.width / 5,
    textAlign: 'center',
    verticalAlign: 'middle',
    color: colors.textOnPrimary,
  },
  input: {
    height: 50,
    backgroundColor: colors.background,
    borderRadius: 5,
    borderColor: colors.divider,
    borderWidth: 1,
    marginTop: 15,
    paddingLeft: 15,
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    marginTop: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.textOnPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
