import { TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { wipWarning } from '../../utils/contacts';
import colors from '../../constants/themeColors';
import styles from './styles';

const CustomHeader = ({ navigation, route, title }) => {
  const handleContactEdit = () => {
    wipWarning();
  };

  const getLeftAction = () => {
    if (route.name !== 'Home') {
      return (
        <Icon
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={20}
          style={{ ...styles.headerIcon, ...styles.headerLeftAction }}
        />
      );
    }

    return (
      <Icon
        onPress={() => navigation.openDrawer()}
        name="menu"
        size={20}
        style={{
          ...styles.headerIcon,
          ...styles.headerLeftAction,
          color: colors.primaryText,
        }}
      />
    );
  };

  const getRightAction = () => {
    if (route.params && route.params.contact) {
      return (
        <TouchableNativeFeedback
          onPress={() => handleContactEdit(route.params.contact)}>
          <Icon
            name="mode"
            size={20}
            style={{
              ...styles.headerIcon,
              ...styles.headerEditBtn,
            }}
          />
        </TouchableNativeFeedback>
      );
    }
  };

  return {
    headerMode: 'screen',
    headerTintColor: colors.primaryText,
    headerStyle: styles.header,
    headerLeft: () => getLeftAction(),
    headerRight: () => getRightAction(),
    title: title,
  };
};

export default CustomHeader;
