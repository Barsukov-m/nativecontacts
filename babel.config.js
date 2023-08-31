module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./src/__tests__/'],
          '@components': './src/components',
        },
      },
    ],
    'react-native-reanimated/plugin', // has to be listed last
  ],
};
