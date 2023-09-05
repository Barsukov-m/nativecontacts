import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContactsStack from './ContactsStack';
import NewContactStack from './NewContactStack';
import MeStack from './MeStack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import themeColors from '../constants/themeColors';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
	const tabOptions = {
		headerShown: false,
		tabBarActiveTintColor: themeColors.tabTextActive,
		tabBarInactiveTintColor: themeColors.tabTextInactive,
		tabBarActiveBackgroundColor: themeColors.tabBackgroundActive,
		tabBarInactiveBackgroundColor: themeColors.tabBackgroundInactive,
		tabBarLabelStyle: {
			fontSize: 10,
			paddingBottom: 5,
		},
	};

	return (
		<Tab.Navigator initialRouteName="Contacts" screenOptions={() => tabOptions}>
			<Tab.Screen
				name="ContactsTab"
				component={ContactsStack}
				options={{
					tabBarLabel: 'Contacts',
					tabBarIcon: ({ color }) => (
						<Icon name="contacts" color={color} size={20} />
					),
				}}
			/>
			<Tab.Screen
				name="NewContactTab"
				component={NewContactStack}
				options={{
					tabBarLabel: 'New Contact',
					tabBarIcon: ({ color }) => (
						<Icon name="person-add" color={color} size={20} />
					),
				}}
			/>
			<Tab.Screen
				name="MeTab"
				component={MeStack}
				options={{
					tabBarLabel: 'Me',
					tabBarIcon: ({ color }) => (
						<Icon name="person" color={color} size={20} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabNavigator;
