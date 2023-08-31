import { render } from '@testing-library/react-native';
import AppNavigator from '../navigation/AppNavigator';

describe('<AppNavigator />', () => {
  it('renders correctly', () => {
    const { getByText } = render(<AppNavigator />);

    expect(getByText('Native Contacts')).toBeDefined();
  });
});
