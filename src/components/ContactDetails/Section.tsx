import React from 'react';
import { View, ViewProps } from 'react-native';
import styles from './styles';

interface SectionProps extends ViewProps {
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children, ...rest }) => {
  return (
    <View style={styles.section} {...rest}>
      {children}
    </View>
  );
};

export default Section;
