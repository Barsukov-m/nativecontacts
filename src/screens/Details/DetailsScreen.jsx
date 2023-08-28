import { ScrollView } from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/ContactDetails/Header';
import Section from '../../components/ContactDetails/Section';
import ContactInfo from '../../components/ContactDetails/ContactInfo';
import { capitalizeFirstLetter } from '../../utils/contacts';

const DetailsScreen = ({ route }) => {
  const { contact } = route.params;
  const { name, email, phone, cell, picture, location, dob, login } = contact;
  const contactName = {
    title: name.title ? capitalizeFirstLetter(name.title) : '',
    first: capitalizeFirstLetter(name.first),
    last: capitalizeFirstLetter(name.last),
  };
  const title = `${contactName.title} ${contactName.first} ${contactName.last}`;
  const birthday = moment(dob).format('MMMM D, YYYY');
  const messageButton = <Icon name="message" size={22} />;

  return (
    <ScrollView>
      <Header title={title} image={picture.large} />

      <Section>
        {email && <ContactInfo title={email} data={'Email'} icon="email" />}
      </Section>

      <Section>
        {phone && (
          <ContactInfo
            title={phone}
            data={'Phone'}
            icon="phone"
            actionButton={messageButton}
          />
        )}
        {cell && (
          <ContactInfo
            title={cell}
            data={'Cell'}
            icon="phone"
            actionButton={messageButton}
          />
        )}
      </Section>
      <Section>
        {location && (
          <ContactInfo
            title={capitalizeFirstLetter(location.city)}
            data={'City'}
            icon="home"
          />
        )}
        {birthday && (
          <ContactInfo title={birthday} data={'Birthday'} icon="cake" />
        )}
        {login && (
          <ContactInfo title={login.username} data={'Username'} icon="person" />
        )}
      </Section>
    </ScrollView>
  );
};

export default DetailsScreen;