import { Text, TextInput, TextInputProps, View } from 'react-native';
import styles from './styles';

interface FormTextInputProps extends TextInputProps {
	onErrorText?: string;
}

const FormTextInput: React.FC<FormTextInputProps> = ({
	onErrorText,
	...rest
}) => {
	return (
		<View>
			<TextInput {...rest}></TextInput>
			<Text style={styles.errorLabel}></Text>
		</View>
	);
};

export default FormTextInput;
