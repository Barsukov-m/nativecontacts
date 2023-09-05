import { PropsWithChildren } from 'react';
import { render, renderHook } from '@testing-library/react-native';
import type { RenderOptions } from '@testing-library/react-native';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { setupStore, type AppStore, type RootState } from '../store/index';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: PreloadedState<RootState>;
	store?: AppStore;
}

const Wrapper = ({
	children,
	store,
}: PropsWithChildren<{ store: AppStore }>): JSX.Element => {
	return <Provider store={store}>{children}</Provider>;
};

export const renderWithProviders = (
	ui: React.ReactElement,
	{
		preloadedState = {} as PreloadedState<RootState>,
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {}
) => {
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
	return renderHook(hook, {
		wrapper: ({ children }) => <Wrapper store={store}>{children}</Wrapper>,
		...renderOptions,
	});
};
