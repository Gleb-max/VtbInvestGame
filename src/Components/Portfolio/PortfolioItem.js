import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import commonStyles from '../../MixIn/commonStyles';
import {CircleImage} from '../CircleImage';

//navigation
import {useNavigation} from '@react-navigation/native';

export const PortfolioItem = ({item}) => {
  //navigation
  const navigation = useNavigation();

  //callbacks
  const _onPressItem = React.useCallback(
    portfolioItem => {
      navigation.navigate('document_detail', {details: item});
    },
    [navigation, item],
  );

  return (
    <TouchableOpacity onPress={() => _onPressItem()}>
      <View style={styles.itemContainer}>
        <View
          style={[commonStyles.horizontalContainer, {alignItems: 'center'}]}>
          <CircleImage source={item.image} size={50} />
          <View style={styles.textBlock}>
            <Text style={styles.name}>{item.name}</Text>
            <View
              style={[
                commonStyles.horizontalContainer,
                {justifyContent: 'space-between'},
              ]}>
              <Text>{item.index}</Text>
              <Text>{item.cost} $</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
