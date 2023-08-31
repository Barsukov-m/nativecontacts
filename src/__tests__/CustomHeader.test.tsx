import { fireEvent, render } from '@testing-library/react-native';
import { CustomHeader } from '../components/CustomHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ContactInterface } from 'types/navigationTypes';
import { wipWarning } from '../utils/contacts';

jest.mock('react-native-vector-icons/MaterialIcons');

// mock contact editing function
jest.mock('../utils/contacts', () => ({
  wipWarning: jest.fn(),
}));

const navigation = { goBack: jest.fn(), openDrawer: jest.fn() };

describe('<CustomHeader />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the left arrow icon when route name is not "Home"', () => {
    render(
      <CustomHeader
        navigation={navigation}
        route={{ name: 'ContactDetails' }}
        title="Details"
      />
    );

    // Check for the icon name
    expect(Icon).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'arrow-back',
      }),
      {}
    );
  });

  it('renders the menu icon when route name is "Home"', () => {
    render(
      <CustomHeader
        navigation={navigation}
        route={{ name: 'Home' }}
        title="Home"
      />
    );

    expect(Icon).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'menu',
      }),
      {}
    );
  });

  it('renders the edit icon when a contact parameter is provided', () => {
    const contact = {
      name: {
        first: 'Maria',
        last: 'Hauser',
      },
      phone: '0386-6098000',
    };

    render(
      <CustomHeader
        navigation={navigation}
        route={{ name: 'Details', params: { contact } }}
        title="Details"
      />
    );

    expect(Icon).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'mode',
      }),
      {}
    );
  });

  it('triggers contact editing when the edit icon is pressed', () => {
    const contact: ContactInterface = {
      name: {
        first: 'Maria',
        last: 'Hauser',
      },
      phone: '0386-6098000',
    };

    const { getByTestId } = render(
      <CustomHeader
        navigation={navigation}
        route={{ name: 'Details', params: { contact } }}
        title="Maria Hauser"
      />
    );

    const editIcon = getByTestId('edit-button');

    fireEvent.press(editIcon);

    expect(wipWarning).toHaveBeenCalled();
  });
});
