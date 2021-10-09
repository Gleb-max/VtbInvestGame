import {StyleSheet} from 'react-native';
import commonStyles from '../../../MixIn/commonStyles';
import Colors from '../../../Constants/Colors';

export const styles = StyleSheet.create({
  container: {
    ...commonStyles.container,
    flex: 1,
    backgroundColor: Colors.lightBlue,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 80,
  },
  // List item styles
  itemContainer: {
    height: 50,
    justifyContent: 'center',
    marginBottom: 10,
  },
  name: {
    ...commonStyles.text,
    fontSize: 15,
    color: Colors.darkBlue,
  },
  textBlock: {
    marginLeft: 20,
  },
});
