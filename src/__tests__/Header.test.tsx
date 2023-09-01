import { render } from '@testing-library/react-native';
import Header from '../components/ContactDetails/Header';

describe('<Header />', () => {
	it('renders title correctly', () => {
		const tree = render(<Header title="Marina Hauser" />);
		const { getByText } = tree;

		// Check for the contact name
		expect(getByText('Marina Hauser')).toBeDefined();

		expect(tree).toMatchSnapshot();
	});

	it('renders image if provided', () => {
		const title = 'Marina Hauser';
		const imageUri = 'https://randomuser.me/api/portraits/women/22.jpg';
		const testID = 'contact-image';

		const { getAllByTestId } = render(
			<Header title={title} image={imageUri} />
		);
		const imageComponents = getAllByTestId(testID);

		// Check for the contact profile image
		expect(imageComponents).toBeDefined();
	});
});
