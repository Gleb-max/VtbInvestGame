import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';
import {PortfolioItem} from './PortfolioItem';
import {testData} from './testData';

const Portfolio = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={testData}
        renderItem={({item}) => (
          <PortfolioItem
            name={item.name}
            cost={item.cost}
            count={item.count}
            image={item.image}
            index={item.index}
          />
        )}
      />
    </View>
  );
};

export default Portfolio;
