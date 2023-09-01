import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import { ListItem } from '../../components/ListItem';
import { ScreenProps } from 'types/navigationTypes';
import { useFetchContactsQuery } from 'store/apis/contacts';
import styles from './styles';

const ContactsScreen: React.FC<ScreenProps> = ({ navigation }) => {
	const { data: contacts, isLoading, isError, error } = useFetchContactsQuery();

	if (isLoading) {
		return (
			<View style={styles.loading}>
				<ActivityIndicator size="large" />
			</View>
		);
	} else if (isError && 'data' in error) {
		return <Text>Error: {JSON.stringify(error.data)}</Text>;
	}

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
