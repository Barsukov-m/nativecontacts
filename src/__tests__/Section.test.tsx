import { Text } from 'react-native';
import { render } from '@testing-library/react-native';
import Section from '../components/ContactDetails/Section';

describe('<Section />', () => {
	it('renders correctly', () => {
		const tree = render(<Section testID="contact-section" />);
		const { getByTestId } = tree;
		const sectionComponent = getByTestId('contact-section');

		expect(sectionComponent).toBeTruthy();

		expect(tree).toMatchSnapshot();
	});

	it('renders child components', () => {
		const { getByText } = render(
			<Section>
				<Text>Child Content</Text>
			</Section>
		);
		const childText = getByText('Child Content');

		expect(childText).toBeTruthy();
	});
});
