import { View, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRoute } from '@react-navigation/native';
import { CustomHeaderRouteParams } from './CustomHeader';
import styles from './styles';

interface RightActionProps {
	onEdit: () => void;
	onDelete: () => void;
}

const RightActions: React.FC<RightActionProps> = ({ onEdit, onDelete }) => {
	const route = useRoute<CustomHeaderRouteParams>();

	if (route.params && route.params.contact) {
		return (
			<View style={styles.actionWrapper}>
				<TouchableNativeFeedback onPress={onEdit}>
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
				<TouchableNativeFeedback onPress={onDelete}>
					<View>
						<Icon
							name="delete"
							size={25}
							style={{
								...styles.icon,
								...styles.editBtn,
							}}
							testID="delete-button"
						/>
					</View>
				</TouchableNativeFeedback>
			</View>
		);
	}

	return null;
};

export default RightActions;
