import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

// Navigation
import AppNavigator from './navigation/AppNavigator';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<AppNavigator />
		</Provider>
	);
};

export default App;
