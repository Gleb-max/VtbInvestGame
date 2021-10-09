import {StyleSheet} from 'react-native';
import Colors from '../../../Constants/Colors';

export const styles = StyleSheet.create({
  containerBase: {
    width: 100,
    height: 60,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginHorizontal: 10,
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
    width: 30,
    height: 30,
  },
});
