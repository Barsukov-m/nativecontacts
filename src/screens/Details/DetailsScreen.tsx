import { ScrollView } from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/ContactDetails/Header';
import Section from '../../components/ContactDetails/Section';
import ContactInfo from '../../components/ContactDetails/ContactInfo';
import { ScreenProps } from 'types/navigationTypes';
import { capitalizeFirstLetter } from '../../utils/contactsUtils';
import { ContactInterface } from '../../types/navigationTypes';

interface DetailsScreenProp extends ScreenProps {
	route: {
		params?: {
			contact?: ContactInterface;
		};
	};
}

const DetailsScreen: React.FC<DetailsScreenProp> = ({ route }) => {
	const { contact } = route.params as { contact: ContactInterface };
	const {
		firstName,
		lastName,
		maidenName,
		email,
		phone,
		username,
		birthDate,
		image,
		address,
		company,
	} = contact;
	const title = `${firstName} ${
		maidenName ? `(${maidenName}) ` : ''
	}${lastName}`;
	const birthday = moment(birthDate).format('MMMM D, YYYY');
	const messageButton = <Icon name="message" size={22} />;

	return (
		<ScrollView>
			<Header title={title} image={image} />

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
			</Section>

			<Section>
				{address && address.city && (
					<ContactInfo
						title={capitalizeFirstLetter(address.city)}
						data={'City'}
						icon="home"
					/>
				)}
				{birthday && (
					<ContactInfo title={birthday} data={'Birthday'} icon="cake" />
				)}
				{company && company.name && (
					<ContactInfo title={company.name} data={'Company'} icon="work" />
				)}
				{username && (
					<ContactInfo title={username} data={'Username'} icon="person" />
				)}
			</Section>
		</ScrollView>
	);
};

export default DetailsScreen;
