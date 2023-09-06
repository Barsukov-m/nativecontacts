import {
	NavigationProp,
	ParamListBase,
	useNavigation,
	useRoute,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import themeColors from '../../constants/themeColors';

export interface NavigationParams extends NavigationProp<ParamListBase> {
	goBack: () => void;
	openDrawer: () => void;
}

const LeftActions: React.FC = () => {
	const { name } = useRoute();
	const { goBack, openDrawer } = useNavigation<NavigationParams>();

	if (name !== 'Home') {
		return (
			<Icon
				onPress={() => goBack()}
				name="arrow-back"
				size={20}
				style={{ ...styles.icon, ...styles.leftAction }}
			/>
		);
	}

	return (
		<Icon
			onPress={() => openDrawer()}
			name="menu"
			size={20}
			style={{
				...styles.icon,
				...styles.leftAction,
				color: themeColors.primaryText,
			}}
		/>
	);
};

export default LeftActions;
