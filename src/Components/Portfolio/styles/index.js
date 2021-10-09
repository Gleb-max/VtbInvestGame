import {StyleSheet} from 'react-native';
import commonStyles from '../../../MixIn/commonStyles';
import Colors from '../../../Constants/Colors';

export const styles = StyleSheet.create({
  container: {
    ...commonStyles.container,
    flex: 1,
    backgroundColor: Colors.lightGray,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 80,
  },
});
