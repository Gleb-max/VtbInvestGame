import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';
import {PortfolioItem} from './PortfolioItem';

const Portfolio = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9,
          10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4,
          5, 6, 7, 8, 9, 10, 11, 12, 13,
        ]}
        renderItem={PortfolioItem}
      />
    </View>
  );
};

export default Portfolio;
