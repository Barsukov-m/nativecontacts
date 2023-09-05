import { StyleSheet } from 'react-native';
import themeColors from '../constants/themeColors';

export default StyleSheet.create({
	header: {
		backgroundColor: themeColors.background,
	},
	headerText: {
		color: themeColors.primaryText,
	},
	headerIcon: {
		fontWeight: 500,
		fontSize: 24,
		color: themeColors.dimmedText,
		paddingRight: 30,
	},
});
