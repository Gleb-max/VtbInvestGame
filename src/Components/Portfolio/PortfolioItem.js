import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import commonStyles from '../../MixIn/commonStyles';
import {LogoImage} from '../../library/components';
import {CircleImage} from '../CircleImage';

export const PortfolioItem = props => {
  return (
    <View style={styles.itemContainer}>
      <View style={[commonStyles.horizontalContainer, {alignItems: 'center'}]}>
        <CircleImage source={props.image} size={50} />
        <View style={styles.textBlock}>
          <Text style={styles.name}>{props.name}</Text>
          <View
            style={[
              commonStyles.horizontalContainer,
              {justifyContent: 'space-between'},
            ]}>
            <Text>{props.index}</Text>
            <Text>{props.cost} $</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
