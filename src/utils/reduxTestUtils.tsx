import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { render, renderHook, waitFor } from '@testing-library/react-native';
import type { RenderOptions } from '@testing-library/react-native';
import type { PreloadedState } from '@reduxjs/toolkit';
import { setupStore, type AppStore, type RootState } from '../store/index';
import { useFetchContactsQuery } from 'store/apis/contacts';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: PreloadedState<RootState>;
	store?: AppStore;
}

export const renderWithProviders = (
	ui: React.ReactElement,
	{
		preloadedState = {} as PreloadedState<RootState>,
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {}
) => {
	const Wrapper = ({
		children,
	}: PropsWithChildren<{ store: AppStore }>): JSX.Element => {
		return <Provider store={store}>{children}</Provider>;
	};

	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export const renderHookWithProviders = <Response, Params>(
	hook: (args: Params) => Response,
	{
		preloadedState,
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {}
) => {
	const Wrapper = ({
		children,
	}: PropsWithChildren<{ store: AppStore }>): JSX.Element => {
		return <Provider store={store}>{children}</Provider>;
	};
	return renderHook(hook, {
		wrapper: Wrapper,
		...renderOptions,
	});
};

export const renderContactsOnScreen = async () => {
	const { result } = renderHookWithProviders(() => useFetchContactsQuery());
	await waitFor(() => expect(result.current.isFetching).toBe(false));
};
