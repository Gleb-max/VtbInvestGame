/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import ProgressBlock from '../../Components/ProgressBlock';
import {styles} from './styles';

export const ProgressScreen = () => {
  return (
    <View style={[styles.container]}>
      <View style={styles.line} />
      <ProgressBlock active={true} text={'Облигации'} description={'Купить облигацию — значит дать государству или компании в долг под проценты.'}/>
      <ProgressBlock active={false} text={'Фонды'} description={'это такая «акция», которая содержит в себе несколько других акций. Покупая 1 акцию ETF, вы покупаете все входящие в него акции в определенной пропорции.'} />
      <ProgressBlock active={false} text={'Акции'} description={'Акция — это часть компании, доля в ее бизнесе. Если вы купили акцию, то фактически стали совладельцем компании и можете претендовать на часть ее прибыли.\n'} />
    </View>
  );
};
