import { StyleSheet } from 'react-native';
import themeColors from '../../constants/themeColors';

export default StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 56,
		paddingHorizontal: 16,
		backgroundColor: themeColors.background,
		shadowColor: themeColors.primaryText,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	titleWrapper: {
		flexDirection: 'row',
	},
	title: {
		fontSize: 20,
		fontWeight: '500',
		color: themeColors.primaryText,
	},
	icon: {
		fontWeight: '500',
		fontSize: 24,
		color: themeColors.primaryText,
	},
	actionWrapper: {
		flexDirection: 'row',
		gap: 15,
	},
	leftAction: {
		paddingRight: 30,
	},
	editBtn: {
		fontSize: 20,
	},
});
