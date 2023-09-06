import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import LeftActions from './LeftActions';
import RightActions from './RightActions';
import { NavigationParams } from './LeftActions';
import { useRemoveContactMutation } from 'store/apis/contacts';
import {
	ContactInterface,
	ContactsRouteParams,
} from '../../types/navigationTypes';
import { logWarning, wipWarning } from '../../utils/contactsUtils';
import styles from './styles';

interface CustomHeaderProps {
	title: string;
	route: {
		name: string;
		params?: {
			contact?: ContactInterface;
		};
	};
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, route }) => {
	const { navigate } = useNavigation<NavigationParams>();

	const contact = route.params?.contact;
	const [removeContact] = useRemoveContactMutation();

	const handleEditPress = () => {
		if (!contact) {
			logWarning('Something went wrong', `Contact not found.`);
		}

		// function that could handle the contact editing
		wipWarning();
	};

	const handleDeletePress = async () => {
		if (!contact || !contact.id) {
			logWarning('Something went wrong', `Contact not found.`);
			return;
		}

		await removeContact(contact.id);
		navigate('Home');
	};

	return (
		<View style={styles.header}>
			<View style={styles.titleWrapper}>
				<LeftActions />
				<Text style={styles.title}>{title}</Text>
			</View>
			<RightActions onEdit={handleEditPress} onDelete={handleDeletePress} />
		</View>
	);
};

export default CustomHeader;
