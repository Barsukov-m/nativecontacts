import { Image, Text, View } from 'react-native';
import styles from './styles';

interface HeaderProps {
  title: string;
  image?: string;
}

const Header: React.FC<HeaderProps> = ({ title, image }) => {
  return (
    <View style={styles.header}>
      {image && (
        <Image
          source={{ uri: image }}
          style={styles.image}
          testID="contact-image"
        />
      )}
      <Text style={styles.contactName}>{title}</Text>
    </View>
  );
};

export default Header;
