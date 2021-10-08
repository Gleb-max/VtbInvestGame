import {StyleSheet} from 'react-native';
import Colors from '../../../Constants/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.medianBlue,
    minHeight: 35,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 150,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  text: {
    color: Colors.white,
  },
});
