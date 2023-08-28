import { Text, TouchableNativeFeedback, View } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ContactInfo = ({ title, data, icon, actionButton }) => {
  return (
    <TouchableNativeFeedback>
      <View style={styles.contactInfoContainer}>
        <View style={styles.contactInfo}>
          <Icon name={icon} size={22} />
          <View>
            <Text style={styles.data}>{title}</Text>
            <Text style={styles.title}>{data}</Text>
          </View>
        </View>
        {actionButton}
      </View>
    </TouchableNativeFeedback>
  );
};

export default ContactInfo;
