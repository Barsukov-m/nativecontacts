import AppNavigator from '../navigation/AppNavigator';
import { renderWithProviders, mockedStore } from 'utils/reduxTestUtils';

describe('<AppNavigator />', () => {
	let store: any;

	beforeEach(() => {
		store = mockedStore;
	});

	it('renders correctly', () => {
		const tree = renderWithProviders(<AppNavigator />);
		const { getByText } = tree;

		expect(getByText('Native Contacts')).toBeDefined();

		expect(tree).toMatchSnapshot();
	});
});
