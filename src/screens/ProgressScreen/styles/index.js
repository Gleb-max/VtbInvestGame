import {StyleSheet} from 'react-native';
import Colors from '../../../Constants/Colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  line: {
    width: 200,
    height: 2,
    backgroundColor: Colors.lightGray,
    top: 30,
    position: 'absolute',
  },
});
