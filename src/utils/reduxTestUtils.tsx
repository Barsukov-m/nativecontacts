import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { RootState } from '../store';
import mockContacts from '../mocks/contacts';
import mockProfile from '../mocks/profile';

const middlewares = [thunk];
const mockStore = configureMockStore<RootState>(middlewares);

jest.mock('../store/', () => ({
	...jest.requireActual('../store/'),
	fetchContacts: jest.fn().mockReturnValue({ type: 'MOCKED_FETCH_CONTACTS' }),
}));

export const mockedStore = mockStore({
	contacts: mockContacts,
	profile: mockProfile,
});

export const renderWithProvider = (component: JSX.Element) =>
	render(<Provider store={mockedStore}>{component}</Provider>);
