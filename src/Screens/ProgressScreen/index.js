import React from 'react';
import {View} from 'react-native';
import ProgressBlock from '../../Components/ProgressBlock';
import commonStyles from '../../MixIn/commonStyles';
import {styles} from './styles';

const ProgressScreen = () => {
  return (
    <View style={[commonStyles.container, styles.container]}>
      <View style={styles.verticalLine} />
      <ProgressBlock active={true} text={'Облигации'} />
      <ProgressBlock active={false} text={'Фонды'} />
      <ProgressBlock active={false} text={'Акции'} />
    </View>
  );
};

export default ProgressScreen;