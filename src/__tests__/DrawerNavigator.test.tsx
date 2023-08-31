import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from '../navigation/DrawerNavigator';
import TabNavigator from '../navigation/TabNavigator';
import NewContactStack from '../navigation/NewContactStack';
import MeStack from '../navigation/MeStack';

describe('<DrawerNavigator />', () => {
  it('contains an item linking to the Contacts page', async () => {
    render(
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );

    const contactsItem = await screen.findByText('Go to Contacts');

    expect(contactsItem).toBeOnTheScreen;
  });

  it('shows the TabNavigator when clicking on the "Go to Contacts" item', async () => {
    render(
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
    render(
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );

    const newContactItem = await screen.findByText('Create New Contact');

    expect(newContactItem).toBeOnTheScreen;
  });

  it('shows the NewContactStack when clicking on the "Create New Contact" item', async () => {
    render(
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
    render(
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );

    const profileItem = await screen.findByText('Profile');

    expect(profileItem).toBeOnTheScreen;
  });

  it('shows the MeStack when clicking on the "Profile" item', async () => {
    render(
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
