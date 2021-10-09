/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import ProgressBlock from '../../Components/ProgressBlock';
import commonStyles from '../../MixIn/commonStyles';
import {styles} from './styles';
import Dialogue from '../../Components/Dialogue';

export const ProgressScreen = () => {
  return (
    <View style={[styles.container]}>
      <View style={styles.verticalLine} />
      <ProgressBlock active={true} text={'Облигации'} />
      <ProgressBlock active={false} text={'Фонды'} />
      <ProgressBlock active={false} text={'Акции'} />
    </View>
  );
};
