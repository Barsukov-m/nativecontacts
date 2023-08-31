import { NavigationContainer } from '@react-navigation/native';
import { fireEvent } from '@testing-library/react-native';
import ContactsStack from '../navigation/ContactsStack';
import { renderWithProvider, mockedStore } from 'utils/reduxTestUtils';

describe('<ContactsStack />', () => {
	let store: any;

	beforeEach(() => {
		store = mockedStore;
	});

	it('renders correctly', () => {
		const { getByText } = renderWithProvider(
			<NavigationContainer>
				<ContactsStack />
			</NavigationContainer>
		);

		expect(getByText('Native Contacts')).toBeDefined();
	});

	it('takes you to the details screen when clicking on a contact', () => {
		const { getAllByTestId, getByText } = renderWithProvider(
			<NavigationContainer>
				<ContactsStack />
			</NavigationContainer>
		);
		const contactImages = getAllByTestId('contact-list-image');

		expect(contactImages).toBeDefined();

		expect(contactImages.length).toBeGreaterThan(0);

		fireEvent(contactImages[0], 'press');

		expect(getByText('Phone')).toBeDefined();
	});
});
