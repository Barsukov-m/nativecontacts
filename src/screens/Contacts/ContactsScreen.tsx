import { FlatList, View } from 'react-native';
import ListItem from '../../components/ListItem/ListItem';
import { ScreenProps } from 'types/navigationTypes';
import { contacts } from '../../db/data';
import styles from './styles';

const ContactsScreen: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <View>
      <FlatList
        style={styles.container}
        data={contacts}
        renderItem={({ item }) => (
          <ListItem contact={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.phone}
      />
    </View>
  );
};

export default ContactsScreen;
