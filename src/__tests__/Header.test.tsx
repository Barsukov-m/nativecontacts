import { render } from '@testing-library/react-native';
import Header from '../components/ContactDetails/Header';

describe('<Header />', () => {
  it('renders title correctly', () => {
    const { getByText } = render(<Header title="Miss Marina Hauser" />);

    // Check for the contact name
    expect(getByText('Miss Marina Hauser')).toBeDefined();
  });

  it('renders image if provided', () => {
    const title = 'Miss Marina Hauser';
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
