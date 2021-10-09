import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import commonStyles from '../../MixIn/commonStyles';
import {getSpacedValue} from '../../Utils/String';
import {styles} from './styles';
import Colors from '../../Constants/Colors';
import {ProgressScreen} from '../ProgressScreen';
import Portfolio from '../../Components/Portfolio';

export const ProfileScreen = () => {
  const [showLevelDetail, setShowLevelDetail] = useState(false);

  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.horizontalContainer}>
        <Text style={commonStyles.text}>Уровень:</Text>
        <TouchableOpacity
          onPress={() => {
            setShowLevelDetail(!showLevelDetail);
          }}>
          <Text
            style={[
              commonStyles.text,
              {color: Colors.medianBlue, paddingBottom: 3},
            ]}>
            {' ' + 'Новичок'}
          </Text>
        </TouchableOpacity>
      </View>
      {showLevelDetail ? <ProgressScreen /> : <View />}

      <Text style={styles.header}>Брокерский счет:</Text>
      <Text style={styles.money}>{getSpacedValue(12345) + ' $'}</Text>
      <Text style={styles.percent}>{'-123% за все время'}</Text>
      <Text style={styles.header}>Портфель:</Text>
      <Portfolio />
    </SafeAreaView>
  );
};
