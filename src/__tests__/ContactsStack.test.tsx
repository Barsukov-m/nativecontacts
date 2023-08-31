import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';

import ContactsStack from '../navigation/ContactsStack';

describe('<ContactsStack />', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <NavigationContainer>
        <ContactsStack />
      </NavigationContainer>
    );

    expect(getByText('Native Contacts')).toBeDefined();
  });

  it('takes you to the details screen when clicking on a contact', () => {
    const { getAllByTestId, getByText } = render(
      <NavigationContainer>
        <ContactsStack />
      </NavigationContainer>
    );
    const contactImages = getAllByTestId('contact-list-image');

    expect(contactImages).toBeDefined();

    expect(contactImages.length).toBeGreaterThan(0);

    fireEvent(contactImages[0], 'press');

    expect(getByText('Phone')).toBeDefined();
  });
});
