import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface ScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

export interface ContactInterface {
  name: {
    title?: string;
    first: string;
    last: string;
  };
  location?: {
    street?: string;
    city?: string;
    state?: string;
    postcode?: number | string;
  };
  email?: string;
  login?: {
    username?: string;
    password?: string;
    salt?: string;
    md5?: string;
    sha1?: string;
    sha256?: string;
  };
  dob?: string;
  registered?: string;
  phone: string;
  cell?: string;
  id?: {
    name?: string;
    value?: string | null;
  };
  picture?: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
  nat?: string;
}
