import {StyleSheet} from 'react-native';
import Colors from '../../../Constants/Colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  line: {
    width: 200,
    height: 2,
    backgroundColor: Colors.lightGray,
    position: 'absolute',
  },
});
