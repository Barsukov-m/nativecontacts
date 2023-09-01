import { render } from '@testing-library/react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ContactInfo from '../components/ContactDetails/ContactInfo';

jest.mock('react-native-vector-icons/MaterialIcons');

describe('<ContactInfo />', () => {
	it('renders correctly', () => {
		const actionButton = <Icon name="message" size={22} />;
		const tree = render(
			<ContactInfo
				title="Phone"
				data="0386-6098000"
				icon="phone"
				actionButton={actionButton}
			/>
		);
		const { getByText } = tree;

		// Check for the contact info title
		expect(getByText('Phone')).toBeDefined();

		// Check for the data
		expect(getByText('0386-6098000')).toBeDefined();

		// Check for the action button
		expect(Icon).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'phone',
			}),
			{}
		);

		// Check for snapshot match
		expect(tree).toMatchSnapshot();
	});
});
