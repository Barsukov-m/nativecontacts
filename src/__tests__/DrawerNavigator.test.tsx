import React from 'react';
import { screen, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from '../navigation/DrawerNavigator';
import { renderWithProvider, mockedStore } from 'utils/reduxTestUtils';

describe('<DrawerNavigator />', () => {
	let store: any;

	beforeEach(() => {
		store = mockedStore;
	});

	it('contains an item linking to the Contacts page', async () => {
		renderWithProvider(
			<NavigationContainer>
				<DrawerNavigator />
			</NavigationContainer>
		);

		const contactsItem = await screen.findByText('Go to Contacts');

		expect(contactsItem).toBeOnTheScreen;
	});

	it('shows the TabNavigator when clicking on the "Go to Contacts" item', async () => {
		renderWithProvider(
			<NavigationContainer>
				<DrawerNavigator />
			</NavigationContainer>
		);

		const contactsItem = await screen.findByText('Go to Contacts');

		fireEvent(contactsItem, 'press');

		const tabNavigatorIndicator = await screen.findByText('Native Contacts');

		expect(tabNavigatorIndicator).toBeOnTheScreen;
	});

	it('contains an item linking to the New Contact page', async () => {
		renderWithProvider(
			<NavigationContainer>
				<DrawerNavigator />
			</NavigationContainer>
		);

		const newContactItem = await screen.findByText('Create New Contact');

		expect(newContactItem).toBeOnTheScreen;
	});

	it('shows the NewContactStack when clicking on the "Create New Contact" item', async () => {
		renderWithProvider(
			<NavigationContainer>
				<DrawerNavigator />
			</NavigationContainer>
		);

		const newContactItem = await screen.findByText('Create New Contact');

		fireEvent(newContactItem, 'press');

		const newContactScreenIndicator = await screen.findByText('New Contact');

		expect(newContactScreenIndicator).toBeOnTheScreen;
	});

	it('contains an item linking to the Profile page', async () => {
		renderWithProvider(
			<NavigationContainer>
				<DrawerNavigator />
			</NavigationContainer>
		);

		const profileItem = await screen.findByText('Profile');

		expect(profileItem).toBeOnTheScreen;
	});

	it('shows the MeStack when clicking on the "Profile" item', async () => {
		renderWithProvider(
			<NavigationContainer>
				<DrawerNavigator />
			</NavigationContainer>
		);

		const profileItem = await screen.findByText('Profile');

		fireEvent(profileItem, 'press');

		const newContactScreenIndicator = await screen.findByText('Phone');

		expect(newContactScreenIndicator).toBeOnTheScreen;
	});
});
