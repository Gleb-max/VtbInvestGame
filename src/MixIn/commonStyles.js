import {StyleSheet} from 'react-native';
import Colors from '../Constants/Colors';

const commonStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    backgroundColor: Colors.white,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 15,
  },
  horizontalContainer: {
    flexDirection: 'row',
  },
});

export default commonStyles;
