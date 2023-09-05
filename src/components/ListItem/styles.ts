import { StyleSheet } from 'react-native';
import themeColors from '../../constants/themeColors';

export default StyleSheet.create({
	listItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	contactInfo: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	contactThumbnail: {
		width: 40,
		height: 40,
		borderRadius: 40 / 2,
	},
	missingImage: {
		backgroundColor: themeColors.primaryDark,
		color: themeColors.textOnPrimary,
		textAlign: 'center',
		verticalAlign: 'middle',
	},
	contactName: {
		paddingLeft: 10,
		color: '#000',
	},
});
