import { Image, Text, TouchableNativeFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { capitalizeFirstLetter } from '../../utils/contacts';
import styles from './styles';

const ListItem = ({ contact, navigation }) => {
  const contactName = `${capitalizeFirstLetter(
    contact.name.first
  )} ${capitalizeFirstLetter(contact.name.last)}`;

  const handleNavigation = () => {
    navigation.navigate('Details', { contact: contact });
  };

  return (
    <TouchableNativeFeedback onPress={handleNavigation}>
      <View style={styles.listItem}>
        <View style={styles.contactInfo}>
          <Image
            source={{ uri: contact.picture.thumbnail }}
            style={styles.contactThumbnail}
          />
          <Text style={styles.contactName}>{contactName}</Text>
        </View>
        <Icon name="arrow-forward" size={25} />
      </View>
    </TouchableNativeFeedback>
  );
};

export default ListItem;
