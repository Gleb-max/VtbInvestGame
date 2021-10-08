import {StyleSheet} from 'react-native';
import Colors from '../../../Constants/Colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticalLine: {
    height: 200,
    width: 2,
    backgroundColor: Colors.lightGray,
    position: 'absolute',
  },
});
