import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';
import {PortfolioItem} from './PortfolioItem';
import {testData} from './testData';

const Portfolio = ({data}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data || testData}
        renderItem={({item}) => <PortfolioItem item={item} />}
      />
    </View>
  );
};

export default Portfolio;
