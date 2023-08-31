import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactThumbnail: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  contactName: {
    paddingLeft: 10,
    color: '#000',
  },
});
