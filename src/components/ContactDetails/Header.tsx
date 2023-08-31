import { Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

interface HeaderProps {
	title: string;
	image?: string;
}

const Header: React.FC<HeaderProps> = ({ title, image }) => {
	const renderHeaderImage = () => {
		if (image) {
			return (
				<Image
					source={{ uri: image }}
					style={styles.image}
					testID="contact-image"
				/>
			);
		} else {
			return (
				<Icon
					style={{ ...styles.image, ...styles.missingImage }}
					name="person"
					size={60}
				/>
			);
		}
	};
	return (
		<View style={styles.header}>
			{renderHeaderImage()}
			<Text style={styles.contactName}>{title}</Text>
		</View>
	);
};

export default Header;
