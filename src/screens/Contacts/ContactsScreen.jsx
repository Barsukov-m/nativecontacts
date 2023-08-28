import { FlatList, View } from 'react-native';
import ListItem from '../../components/ListItem/ListItem';
import styles from './styles';
import { contacts } from '../../data';

const ContactsScreen = ({ navigation }) => {
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
