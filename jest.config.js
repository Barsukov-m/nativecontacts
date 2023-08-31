module.exports = {
	preset: 'react-native',
	setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
	transform: {
		'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest',
	},
	transformIgnorePatterns: [
		'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
	],
	reporters: ['default', 'jest-stare'],
	testResultsProcessor: './node_modules/jest-stare',
};
