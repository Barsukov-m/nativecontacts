import { Image, Text, View } from 'react-native';
import styles from './styles';

const Header = ({ title, image }) => {
  return (
    <View style={styles.header}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Text style={styles.contactName}>{title}</Text>
    </View>
  );
};

export default Header;
