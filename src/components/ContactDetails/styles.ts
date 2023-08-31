import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../constants/themeColors';

const window = Dimensions.get('window');

export default StyleSheet.create({
	header: {
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingTop: 20,
		backgroundColor: '#eee',
	},
	image: {
		width: window.width / 3,
		height: window.width / 3,
		borderRadius: window.width / 6,
	},
	missingImage: {
		alignSelf: 'center',
		backgroundColor: colors.primaryDark,
		marginBottom: 15,
		textAlign: 'center',
		verticalAlign: 'middle',
		color: colors.textOnPrimary,
	},
	contactName: {
		marginVertical: 20,
		fontSize: 20,
		color: '#222',
	},
	section: {
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
	},
	contactInfoContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		paddingVertical: 15,
	},
	contactInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
	},
	title: {
		fontSize: 12,
		marginTop: 2,
	},
	data: {
		fontSize: 16,
		color: '#000',
	},
});
