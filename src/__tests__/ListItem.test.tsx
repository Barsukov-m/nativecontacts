import { render, fireEvent } from '@testing-library/react-native';
import { ListItem } from '../components/ListItem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ContactInterface } from 'types/navigationTypes';

// Mock the navigation
const mockNavigate = jest.fn();
const navigation: any = {
	navigate: mockNavigate,
};

jest.mock('react-native-vector-icons/MaterialIcons');

describe('<ListItem />', () => {
	const contact: ContactInterface = {
		firstName: 'Terry',
		lastName: 'Medhurst',
		phone: '+63 791 675 8914',
		image: 'https://robohash.org/hicveldicta.png',
	};

	it('renders the contact name', () => {
		const { getByText } = render(
			<ListItem contact={contact} navigation={navigation} />
		);
		expect(getByText('Terry Medhurst')).toBeDefined();
	});

	it('renders the contact profile image when available', () => {
		const { getByTestId } = render(
			<ListItem contact={contact} navigation={navigation} />
		);
		const image = getByTestId('contact-list-image');
		expect(image.props.source.uri).toBe(contact.image);
	});

	it('renders the person icon when contact profile image is not available', () => {
		const { queryByTestId } = render(
			<ListItem
				contact={{
					firstName: contact.firstName,
					lastName: contact.lastName,
					phone: contact.phone,
				}}
				navigation={navigation}
			/>
		);

		expect(queryByTestId('contact-list-image')).not.toBeTruthy();

		expect(Icon).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'person',
			}),
			{}
		);
	});

	it('navigates to Details screen when pressed', () => {
		const { getByTestId } = render(
			<ListItem contact={contact} navigation={navigation} />
		);
		const listItem = getByTestId('contact-list-image');
		fireEvent.press(listItem);

		expect(mockNavigate).toHaveBeenCalledWith('Details', { contact });
	});
});
