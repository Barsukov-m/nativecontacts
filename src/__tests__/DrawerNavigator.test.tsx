import React from 'react';
import { screen, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from '../navigation/DrawerNavigator';
import { renderWithProvider, mockedStore } from 'utils/reduxTestUtils';

describe('<DrawerNavigator />', () => {
	let store: any;

	const renderComponent = () =>
		renderWithProvider(
			<NavigationContainer>
				<DrawerNavigator />
			</NavigationContainer>
		);

	beforeEach(() => {
		store = mockedStore;
	});

	it('renders correctly', () => {
		const tree = renderComponent();

		expect(tree).toMatchSnapshot();
	});

	it('contains an item linking to the Contacts page', async () => {
		renderComponent();

		const contactsItem = await screen.findByText('Go to Contacts');

		expect(contactsItem).toBeOnTheScreen;
	});

	it('shows the TabNavigator when clicking on the "Go to Contacts" item', async () => {
		renderComponent();

		const contactsItem = await screen.findByText('Go to Contacts');

		fireEvent(contactsItem, 'press');

		const tabNavigatorIndicator = await screen.findByText('Native Contacts');

		expect(tabNavigatorIndicator).toBeOnTheScreen;
	});

	it('contains an item linking to the New Contact page', async () => {
		renderComponent();

		const newContactItem = await screen.findByText('Create New Contact');

		expect(newContactItem).toBeOnTheScreen;
	});

	it('shows the NewContactStack when clicking on the "Create New Contact" item', async () => {
		renderComponent();

		const newContactItem = await screen.findByText('Create New Contact');

		fireEvent(newContactItem, 'press');

		const newContactScreenIndicator = await screen.findByText('New Contact');

		expect(newContactScreenIndicator).toBeOnTheScreen;
	});

	it('contains an item linking to the Profile page', async () => {
		renderComponent();

		const profileItem = await screen.findByText('Profile');

		expect(profileItem).toBeOnTheScreen;
	});

	it('shows the MeStack when clicking on the "Profile" item', async () => {
		renderComponent();

		const profileItem = await screen.findByText('Profile');

		fireEvent(profileItem, 'press');

		const newContactScreenIndicator = await screen.findByText('Phone');

		expect(newContactScreenIndicator).toBeOnTheScreen;
	});
});
