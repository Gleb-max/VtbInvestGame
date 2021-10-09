import {StyleSheet} from 'react-native';
import commonStyles from '../../../MixIn/commonStyles';
import Colors from '../../../Constants/Colors';

export const styles = StyleSheet.create({
  money: {
    ...commonStyles.text,
    fontSize: 30,
    color: Colors.darkBlue,
  },
  horizontalContainer: {
    flexDirection: 'row',
  },
  percent: {
    ...commonStyles.text,
    fontSize: 13,
    color: Colors.darkBlue,
  },
  header: {
    ...commonStyles.text,
    marginTop: 7,
  },
});
