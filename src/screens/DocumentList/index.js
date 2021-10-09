import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import Portfolio from '../../Components/Portfolio';
import commonStyles from '../../MixIn/commonStyles';
import {Header} from '../../Components/Header';

const DocumentList = () => {
  return (
    <View style={commonStyles.container}>
      <Header text={'Облигации'} />
      <Portfolio
        data={[
          {
            name: 'Это облигация',
            cost: 100,
            index: 'POE',
            image: require('../../../assets/images/ruble.png'),
            delta: '0.01%',
            description: 'Крутая облигация, покупай быстрее!',
            country: 'Россия',
          },
        ]}
      />
    </View>
  );
};

export default DocumentList;
