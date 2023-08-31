import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabNavigator from '../navigation/TabNavigator';

jest.mock('react-native-vector-icons/MaterialIcons');

describe('<TabNavigator />', () => {
  it('renders the Contacts tab with correct icon and label', () => {
    const { getByText } = render(
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );

    // Check for the label
    expect(getByText('Contacts')).toBeTruthy();

    // Check for the icon name
    expect(Icon).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'contacts',
      }),
      {}
    );
  });

  it('renders the New Contact tab with correct icon and label', () => {
    const { getByText } = render(
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );

    expect(getByText('New Contact')).toBeTruthy();

    expect(Icon).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'person-add',
      }),
      {}
    );
  });

  it('renders the Me tab with correct icon and label', () => {
    const { getByText } = render(
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );

    expect(getByText('Me')).toBeTruthy();

    expect(Icon).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'person',
      }),
      {}
    );
  });
});
