import { useEffect } from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import { ListItem } from '../../components/ListItem';
import { ScreenProps } from 'types/navigationTypes';
import { useAppDispatch, useAppSelector } from 'hooks/storeHooks';
import { fetchContacts } from 'store/slices/contactsSlice';
import styles from './styles';

const ContactsScreen: React.FC<ScreenProps> = ({ navigation }) => {
	const dispatch = useAppDispatch();
	const contacts = useAppSelector((state) => state.contacts);
	const status = useAppSelector((state) => state.contacts.status);
	const error = useAppSelector((state) => state.contacts.error);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchContacts());
		}
	}, [status, dispatch]);

	if (status === 'loading') {
		return (
			<View style={styles.loading}>
				<ActivityIndicator size="large" />
			</View>
		);
	} else if (status === 'failed') {
		return <Text>Error: {error}</Text>;
	}

	return (
		<View>
			<FlatList
				style={styles.container}
				data={contacts.contacts}
				renderItem={({ item }) => (
					<ListItem contact={item} navigation={navigation} />
				)}
				keyExtractor={(item) => item.phone}
			/>
		</View>
	);
};

export default ContactsScreen;
