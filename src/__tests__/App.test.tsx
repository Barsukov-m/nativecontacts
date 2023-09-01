import { render } from '@testing-library/react-native';
import App from '../App';

describe('<App />', () => {
	it('renders correctly', () => {
		const tree = render(<App />);
		const { getByText } = tree;

		expect(getByText('Native Contacts')).toBeDefined();

		expect(tree).toMatchSnapshot();
	});
});
