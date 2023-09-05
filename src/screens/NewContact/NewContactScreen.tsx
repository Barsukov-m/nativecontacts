import { useState } from 'react';
import { View, TouchableNativeFeedback, Text, ScrollView } from 'react-native';
import FormTextInput from './FormTextInput';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAppDispatch } from '../../hooks/storeHooks';
import { ScreenProps } from 'types/navigationTypes';
import { wipWarning } from '../../utils/contactsUtils';
import styles from './styles';
import {
	addContact,
	useAddContactMutation,
	useRemoveContactMutation,
} from 'store/apis/contacts';

const NewContactScreen: React.FC<ScreenProps> = ({ navigation }) => {
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [maidenName, setMaidenName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [birthDate, setBirthDate] = useState<string>('');
	const [city, setCity] = useState<string>('');
	const [company, setCompany] = useState<string>('');

	// const dispatch = useAppDispatch();

	const [addContact] = useAddContactMutation();
	const [removeContact] = useRemoveContactMutation();

	const handleSubmit = async () => {
		// contact submition logic
		const contact = {
			firstName,
			lastName,
			...(maidenName ? { maidenName } : {}),
			...(email ? { email } : {}),
			phone,
			...(birthDate ? { birthDate } : {}),
			...(city ? { city } : {}),
			...(company ? { name: company } : {}),
		};

		setFirstName('');
		setLastName('');
		setMaidenName('');
		setEmail('');
		setPhone('');
		setBirthDate('');
		setCity('');
		setCompany('');

		if (firstName && lastName && phone) {
			await addContact(contact);

			navigation.navigate('Details', { contact: contact });
		} else {
			navigation.navigate('Home');
		}
	};

	const handlePictureAddition = () => {
		// picture addition logic
		wipWarning();
	};

	return (
		<ScrollView>
			<View style={styles.container}>
				<View>
					<Icon
						onPress={handlePictureAddition}
						style={styles.addNew}
						name="add-a-photo"
						size={25}
					/>

					<FormTextInput
						placeholder="First Name"
						value={firstName}
						onChangeText={setFirstName}
						onErrorText={'Please enter a first name'}
						style={styles.input}
					/>
					<FormTextInput
						placeholder="Last Name"
						value={lastName}
						onChangeText={setLastName}
						onErrorText={'Please enter a last name'}
						style={styles.input}
					/>
					<FormTextInput
						placeholder="Maiden Name (optional)"
						value={maidenName}
						onChangeText={setMaidenName}
						style={styles.input}
					/>
					<FormTextInput
						placeholder="Email (optional)"
						value={email}
						onChangeText={setEmail}
						style={styles.input}
					/>
					<FormTextInput
						placeholder="Phone"
						value={phone}
						onChangeText={setPhone}
						onErrorText={'Please enter a phone number'}
						style={styles.input}
					/>
					<FormTextInput
						placeholder="Birth Date (optional)"
						value={birthDate}
						onChangeText={setBirthDate}
						style={styles.input}
					/>
					<FormTextInput
						placeholder="City (optional)"
						value={city}
						onChangeText={setCity}
						style={styles.input}
					/>
					<FormTextInput
						placeholder="Company (optional)"
						value={company}
						onChangeText={setCompany}
						style={styles.input}
					/>
				</View>

				<TouchableNativeFeedback onPress={handleSubmit}>
					<View style={styles.buttonContainer}>
						<Text style={styles.buttonText}>Add Contact</Text>
					</View>
				</TouchableNativeFeedback>
			</View>
		</ScrollView>
	);
};

export default NewContactScreen;
