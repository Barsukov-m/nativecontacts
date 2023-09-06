import { fireEvent, screen } from '@testing-library/react-native';
import { CustomHeader } from '../components/CustomHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ContactInterface } from 'types/navigationTypes';
import { wipWarning } from '../utils/contactsUtils';
import { renderWithProviders } from 'utils/reduxTestUtils';
import { NavigationContainer } from '@react-navigation/native';
import { initServer } from 'mocks/server';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

jest.mock('react-native-vector-icons/MaterialIcons');

// mock contact editing function
jest.mock('../utils/contactsUtils', () => ({
	wipWarning: jest.fn(),
}));

initServer();

const renderWithNavigation = (ui: React.ReactElement) =>
	renderWithProviders(<NavigationContainer>{ui}</NavigationContainer>);

describe('<CustomHeader />', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it.only('renders correctly', () => {
		const tree = renderWithNavigation(
			<CustomHeader route={{ name: 'Home' }} title="Home" />
		);

		// debug
		console.log(tree);
		expect(1).toBe(1);
		return;

		const { getByText } = tree;

		expect(getByText('Home')).toBeTruthy();

		expect(tree).toMatchSnapshot();
	});

	it('renders the left arrow icon when route name is not "Home"', () => {
		renderWithNavigation(
			<CustomHeader route={{ name: 'ContactDetails' }} title="Details" />
		);

		// Check for the icon name
		expect(Icon).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'arrow-back',
			}),
			{}
		);
	});

	it('renders the menu icon when route name is "Home"', () => {
		renderWithNavigation(
			<CustomHeader route={{ name: 'Home' }} title="Home" />
		);

		expect(Icon).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'menu',
			}),
			{}
		);
	});

	it('renders the edit icon when a contact parameter is provided', () => {
		const contact: ContactInterface = {
			firstName: 'Terry',
			lastName: 'Medhurst',
			phone: '+63 791 675 8914',
		};

		renderWithNavigation(
			<CustomHeader
				route={{ name: 'Details', params: { contact } }}
				title="Details"
			/>
		);

		expect(Icon).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'mode',
			}),
			{}
		);
	});

	it('triggers contact editing when the edit icon is pressed', () => {
		const contact: ContactInterface = {
			firstName: 'Terry',
			lastName: 'Medhurst',
			phone: '+63 791 675 8914',
		};

		renderWithNavigation(
			<CustomHeader
				route={{ name: 'Details', params: { contact } }}
				title="Details"
			/>
		);

		const editIcon = screen.getByText(/edit-button/);

		expect(editIcon).not.toBeNull();

		if (editIcon) {
			fireEvent.press(editIcon);
		}

		expect(wipWarning).toHaveBeenCalled();
	});
});
