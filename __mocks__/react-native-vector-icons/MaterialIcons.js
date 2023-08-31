// skip rendering the icon
export default jest.fn((props) => {
	return `Icon${props.testID ? ` [${props.testID}]` : ''}`;
});
