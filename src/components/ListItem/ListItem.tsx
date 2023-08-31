import { Image, Text, TouchableNativeFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScreenProps } from 'types/navigationTypes';
import { ContactInterface } from '../../types/navigationTypes';
import { getHeaderTitleByContact } from '../../utils/contactsUtils';
import styles from './styles';

interface ListItemProps extends ScreenProps {
	contact: ContactInterface;
}

const ListItem: React.FC<ListItemProps> = ({ contact, navigation }) => {
	const title = getHeaderTitleByContact(contact);

	const handleNavigation = () => {
		navigation.navigate('Details', { contact: contact });
	};

	const renderContactImage = () => {
		if (contact.image) {
			return (
				<Image
					source={{ uri: contact.image }}
					style={styles.contactThumbnail}
					testID="contact-list-image"
				/>
			);
		} else {
			return (
				<Icon
					style={{ ...styles.contactThumbnail, ...styles.missingImage }}
					name="person"
					size={20}
				/>
			);
		}
	};

	return (
		<TouchableNativeFeedback onPress={handleNavigation}>
			<View style={styles.listItem}>
				<View style={styles.contactInfo}>
					{renderContactImage()}
					<Text style={styles.contactName}>{title}</Text>
				</View>
				<Icon name="arrow-forward" size={25} />
			</View>
		</TouchableNativeFeedback>
	);
};

export default ListItem;
