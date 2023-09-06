import { NavigationContainer } from '@react-navigation/native';
import { fireEvent } from '@testing-library/react-native';
import ContactsStack from '../navigation/ContactsStack';
import {
	renderContactsOnScreen,
	renderWithProviders,
} from 'utils/reduxTestUtils';

describe('<ContactsStack />', () => {
	const renderComponent = () =>
		renderWithProviders(
			<NavigationContainer>
				<ContactsStack />
			</NavigationContainer>
		);

	it('renders correctly', () => {
		const tree = renderComponent();
		const { getByText } = tree;

		expect(getByText('Native Contacts')).toBeDefined();

		expect(tree).toMatchSnapshot();
	});

	it('takes you to the details screen when clicking on a contact', async () => {
		const { getAllByTestId, getByText } = renderComponent();
		await renderContactsOnScreen();

		const contactImages = getAllByTestId('contact-list-image');

		expect(contactImages).toBeDefined();

		expect(contactImages.length).toBeGreaterThan(0);

		fireEvent(contactImages[0], 'press');
		expect(getByText('Phone')).toBeDefined();
	});
});
