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
import Colors from '../../Constants/Colors';
import {ProgressScreen} from '../ProgressScreen';
import Portfolio from '../../Components/Portfolio';

//other deps
// import SwitchSelector from 'react-native-switch-selector';

//components
// import { PressableIcon, CustomDropDown } from 'library/components';

//styles
import styles from './Profile.styles';

export const ProfileView = () => {
  const [showLevelDetail, setShowLevelDetail] = useState(true);

  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={commonStyles.horizontalContainer}>
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

      {/*<Text style={styles.header}>Брокерский счет:</Text>*/}
      <Text style={styles.money}>{getSpacedValue(12345) + ' $'}</Text>
      <Text style={styles.percent}>{'-123% за все время'}</Text>
      <Text style={styles.header}>Портфель:</Text>
      <Portfolio />
    </SafeAreaView>
  );
};
