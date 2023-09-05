import { Dimensions, StyleSheet } from 'react-native';
import themeColors from '../../constants/themeColors';

const window = Dimensions.get('window');

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		padding: 20,
		backgroundColor: themeColors.background,
	},
	addNew: {
		alignSelf: 'center',
		backgroundColor: themeColors.primaryDark,
		width: window.width / 5,
		height: window.width / 5,
		marginBottom: 15,
		borderRadius: window.width / 5,
		textAlign: 'center',
		verticalAlign: 'middle',
		color: themeColors.textOnPrimary,
	},
	input: {
		height: 50,
		backgroundColor: themeColors.background,
		borderRadius: 5,
		borderColor: themeColors.divider,
		borderWidth: 1,
		marginTop: 15,
		paddingLeft: 15,
	},
	errorLabel: {
		color: themeColors.error,
	},
	buttonContainer: {
		backgroundColor: themeColors.primary,
		marginTop: 15,
		paddingHorizontal: 15,
		paddingVertical: 12,
		borderRadius: 5,
		alignItems: 'center',
	},
	buttonText: {
		color: themeColors.textOnPrimary,
		fontSize: 16,
		fontWeight: 'bold',
	},
});
