import { Text } from 'react-native';

// skip rendering the icon
export default jest.fn((props) => {
	return <Text>{`Icon${props.testID ? ` [${props.testID}]` : ''}`}</Text>;
});
