import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabNavigator from '../navigation/TabNavigator';
import { renderWithProviders } from 'utils/reduxTestUtils';

jest.mock('react-native-vector-icons/MaterialIcons');

describe('<TabNavigator />', () => {
	const renderComponent = () =>
		renderWithProviders(
			<NavigationContainer>
				<TabNavigator />
			</NavigationContainer>
		);

	it('renders correctly', () => {
		const tree = renderComponent();

		expect(tree).toMatchSnapshot();
	});

	it('renders the Contacts tab with correct icon and label', () => {
		const { getByText } = renderComponent();

		// Check for the label
		expect(getByText('Contacts')).toBeTruthy();

		// Check for the icon name
		expect(Icon).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'contacts',
			}),
			{}
		);
	});

	it('renders the New Contact tab with correct icon and label', () => {
		const { getByText } = renderComponent();

		expect(getByText('New Contact')).toBeTruthy();

		expect(Icon).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'person-add',
			}),
			{}
		);
	});

	it('renders the Me tab with correct icon and label', () => {
		const { getByText } = renderComponent();

		expect(getByText('Me')).toBeTruthy();

		expect(Icon).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'person',
			}),
			{}
		);
	});
});
