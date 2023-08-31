import { useState } from 'react';
import { View, TextInput, TouchableNativeFeedback, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScreenProps } from 'types/navigationTypes';
import { wipWarning } from '../../utils/contacts';
import styles from './styles';

const NewContactScreen: React.FC<ScreenProps> = ({ navigation }) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [cell, setCell] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<string>('');

  const handleSubmit = () => {
    // contact submition logic
    navigation.goBack();
  };

  const handlePictureAddition = () => {
    // picture addition logic
    wipWarning();
  };

  return (
    <View style={styles.container}>
      <View>
        <Icon
          onPress={handlePictureAddition}
          style={styles.addNew}
          name="add-a-photo"
          size={25}
        />

        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          style={styles.input}
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          style={styles.input}
        />
        <TextInput
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
        />
        <TextInput
          placeholder="Cell (optional)"
          value={cell}
          onChangeText={setCell}
          style={styles.input}
        />
        <TextInput
          placeholder="Company (optional)"
          value={company}
          onChangeText={setCompany}
          style={styles.input}
        />
        <TextInput
          placeholder="Email (optional)"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="City (optional)"
          value={city}
          onChangeText={setCity}
          style={styles.input}
        />
      </View>

      <TouchableNativeFeedback onPress={handleSubmit}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Add Contact</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default NewContactScreen;
