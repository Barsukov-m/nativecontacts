import { render, fireEvent } from '@testing-library/react-native';
import { ListItem } from '../components/ListItem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ContactInterface } from 'types/navigationTypes';

jest.mock('react-native-vector-icons/MaterialIcons');

// Mock the navigation
const mockNavigate = jest.fn();
const navigation: any = {
  navigate: mockNavigate,
};

describe('<ListItem />', () => {
  const contact: ContactInterface = {
    name: {
      first: 'Maria',
      last: 'Hauser',
    },
    phone: '0386-6098000',
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/22.jpg',
    },
  };

  it('renders the contact name', () => {
    const { getByText } = render(
      <ListItem contact={contact} navigation={navigation} />
    );
    expect(getByText('Maria Hauser')).toBeDefined();
  });

  it('renders the contact profile image when available', () => {
    const { getByTestId } = render(
      <ListItem contact={contact} navigation={navigation} />
    );
    const image = getByTestId('contact-list-image');
    expect(image.props.source.uri).toBe(contact.picture?.thumbnail);
  });

  it('navigates to Details screen when pressed', () => {
    const { getByTestId } = render(
      <ListItem contact={contact} navigation={navigation} />
    );
    const listItem = getByTestId('contact-list-image');
    fireEvent.press(listItem);

    expect(mockNavigate).toHaveBeenCalledWith('Details', { contact });
  });
});
