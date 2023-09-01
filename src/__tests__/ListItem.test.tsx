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

	const renderComponent = (contact: ContactInterface) =>
		render(<ListItem contact={contact} navigation={navigation} />);

	it('renders correctly and renders the contact name', () => {
		const tree = renderComponent(contact);
		const { getByText } = tree;

		expect(getByText('Terry Medhurst')).toBeDefined();

		expect(tree).toMatchSnapshot();
	});

	it('renders the contact profile image when available', () => {
		const { getByTestId } = renderComponent(contact);
		const image = getByTestId('contact-list-image');

		expect(image.props.source.uri).toBe(contact.image);
	});

	it('renders the person icon when contact profile image is not available', () => {
		const { queryByTestId } = renderComponent({
			firstName: contact.firstName,
			lastName: contact.lastName,
			phone: contact.phone,
		});

		expect(queryByTestId('contact-list-image')).not.toBeTruthy();

		expect(Icon).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'person',
			}),
			{}
		);
	});

	it('navigates to Details screen when pressed', () => {
		const { getByTestId } = renderComponent(contact);
		const listItem = getByTestId('contact-list-image');
		fireEvent.press(listItem);

		expect(mockNavigate).toHaveBeenCalledWith('Details', { contact });
	});
});
