import React from 'react';
import { View, Text } from 'react-native';
import {
	ParamListBase,
	RouteProp,
	useNavigation,
	useRoute,
} from '@react-navigation/native';
import LeftActions from './LeftActions';
import RightActions from './RightActions';
import { NavigationParams } from './LeftActions';
import { useRemoveContactMutation } from 'store/apis/contacts';
import { ContactInterface } from '../../types/navigationTypes';
import { logWarning, wipWarning } from '../../utils/contactsUtils';
import styles from './styles';

export interface CustomHeaderRouteParams
	extends RouteProp<ParamListBase, string> {
	params: {
		contact: ContactInterface;
	};
}

const CustomHeader: React.FC<{ title: string }> = ({ title }) => {
	const route = useRoute<CustomHeaderRouteParams>();
	const navigation = useNavigation<NavigationParams>();
	const [removeContact] = useRemoveContactMutation();

	const handleEditPress = () => {
		if (route.params.contact) {
			wipWarning();
		}
	};

	const handleDeletePress = async () => {
		const { id } = route.params.contact;

		console.log('DEBUG:', route.params.contact.id);

		if (id) {
			await removeContact(id);
			navigation.navigate('Home');
		}

		logWarning(
			'Something went wrong',
			`Contact with the provided ID: ${id} not found.`
		);
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
