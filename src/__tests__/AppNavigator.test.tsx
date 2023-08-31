import AppNavigator from '../navigation/AppNavigator';
import { renderWithProvider, mockedStore } from 'utils/reduxTestUtils';

describe('<AppNavigator />', () => {
	let store: any;

	beforeEach(() => {
		store = mockedStore;
	});

	it('renders correctly', () => {
		const { getByText } = renderWithProvider(<AppNavigator />);

		expect(getByText('Native Contacts')).toBeDefined();
	});
});
