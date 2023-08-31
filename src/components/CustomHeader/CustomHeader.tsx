import React from 'react';
import { View, TouchableNativeFeedback, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ContactInterface } from '../../types/navigationTypes';
import { wipWarning } from '../../utils/contactsUtils';
import colors from '../../constants/themeColors';
import styles from './styles';

interface CustomHeaderProps {
	navigation: {
		goBack?: () => void;
		openDrawer?: () => void;
	};
	route: {
		name: string;
		params?: {
			contact?: ContactInterface;
		};
	};
	title: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
	navigation,
	route,
	title,
}) => {
	const handleEditPress = () => {
		if (route.params?.contact) {
			wipWarning();
		}
	};

	const LeftAction = (): JSX.Element => {
		if (route.name !== 'Home') {
			return (
				<Icon
					onPress={() => {
						navigation.goBack && navigation.goBack();
					}}
					name="arrow-back"
					size={20}
					style={{ ...styles.icon, ...styles.leftAction }}
				/>
			);
		}

		return (
			<Icon
				onPress={() => {
					navigation.openDrawer && navigation.openDrawer();
				}}
				name="menu"
				size={20}
				style={{
					...styles.icon,
					...styles.leftAction,
					color: colors.primaryText,
				}}
			/>
		);
	};

	const RightAction = (): JSX.Element | null => {
		if (route.params && route.params.contact) {
			return (
				<TouchableNativeFeedback onPress={handleEditPress}>
					<View>
						<Icon
							name="mode"
							size={20}
							style={{
								...styles.icon,
								...styles.editBtn,
							}}
							testID="edit-button"
						/>
					</View>
				</TouchableNativeFeedback>
			);
		}

		return null;
	};

	return (
		<View style={styles.header}>
			<View style={styles.titleWrapper}>
				<LeftAction />
				<Text style={styles.title}>{title}</Text>
			</View>
			<RightAction />
		</View>
	);
};

export default CustomHeader;
