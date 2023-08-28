import { useState } from 'react';
import { View, TextInput, TouchableNativeFeedback, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { wipWarning } from '../../utils/contacts';
import styles from './styles';

const NewContactScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [cell, setCell] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

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
      <View style={styles.form}>
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
