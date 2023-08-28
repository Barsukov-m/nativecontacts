import { View } from 'react-native';
import styles from './styles';

const Section = ({ children, ...rest }) => {
  return (
    <View style={styles.section} {...rest}>
      {children}
    </View>
  );
};

export default Section;
