import AppNavigator from '../navigation/AppNavigator';
import { renderWithProvider, mockedStore } from 'utils/reduxTestUtils';

describe('<AppNavigator />', () => {
	let store: any;

	beforeEach(() => {
		store = mockedStore;
	});

	it('renders correctly', () => {
		const tree = renderWithProvider(<AppNavigator />);
		const { getByText } = tree;

		expect(getByText('Native Contacts')).toBeDefined();

		expect(tree).toMatchSnapshot();
	});
});
