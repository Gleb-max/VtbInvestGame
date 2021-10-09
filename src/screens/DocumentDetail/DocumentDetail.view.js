import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './DocumentDetail.styles';
import commonStyles from '../../MixIn/commonStyles';
import {getSpacedValue} from '../../Utils/String';
import SimpleButton from '../../Components/SimpleButton';
import {CircleImage} from '../../Components/CircleImage';

export const DocumentDetailView = ({item}) => {
  return (
    <View style={commonStyles.container}>
      <View style={[commonStyles.horizontalContainer]}>
        <CircleImage source={item.image} size={40} />
        <View style={{marginLeft: 15}}>
          <Text style={styles.header}>{item.name}</Text>
          <Text style={styles.index}>{item.index}</Text>
        </View>
      </View>
      <View style={styles.costContainer}>
        <Text style={styles.cost}>{getSpacedValue(item.cost || 0)} $</Text>
        <Text style={styles.delta}>-&gt; {item.delta}</Text>
      </View>
      <View style={styles.chartContainer}>
        <Text>CHART HERE</Text>
      </View>
      <SimpleButton
        text={'Купить'}
        onPress={() => console.warn('not implement')}
        containerStyle={{alignSelf: 'center', width: 150, marginTop: 20}}
      />
    </View>
  );
};
