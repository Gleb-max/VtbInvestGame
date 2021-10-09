import {StyleSheet} from 'react-native';
import commonStyles from '../../MixIn/commonStyles';
import Colors from '../../Constants/Colors';

const styles = StyleSheet.create({
  container: {},
  header: {
    ...commonStyles.text,
    fontSize: 25,
    color: Colors.darkBlue,
  },
  cost: {
    ...commonStyles.text,
    fontSize: 30,
    color: Colors.medianBlue,
  },
  costContainer: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: Colors.darkBlue,
    paddingBottom: 15,
  },
  index: {
    ...commonStyles.text,
    fontSize: 15,
  },
  delta: {
    color: Colors.darkBlue,
  },
  chartContainer: {
    flex: 1,
    backgroundColor: 'red',
    maxHeight: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
