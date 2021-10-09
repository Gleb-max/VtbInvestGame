import {StyleSheet} from 'react-native';
import commonStyles from '../../../MixIn/commonStyles';
import Colors from '../../../Constants/Colors';

export const styles = StyleSheet.create({
  money: {
    ...commonStyles.text,
    fontSize: 35,
    marginTop: 20,
    color: Colors.darkBlue,
    alignSelf: 'center',
  },
  percent: {
    ...commonStyles.text,
    fontSize: 11,
    color: Colors.darkBlue,
    alignSelf: 'center',
    marginBottom: 10,
  },
  header: {
    ...commonStyles.text,
    marginTop: 7,
  },
});
