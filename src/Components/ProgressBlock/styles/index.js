import {StyleSheet} from 'react-native';
import Colors from '../../../Constants/Colors';

export const styles = StyleSheet.create({
  containerBase: {
    width: 120,
    height: 100,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    elevation: 12,
  },

  containerActive: {
    backgroundColor: Colors.lightBlue,
    borderColor: Colors.darkBlue,
  },
  containerInactive: {
    backgroundColor: Colors.lightGray,
    borderColor: Colors.black,
  },
  image: {
    width: 40,
    height: 40,
  },
});
