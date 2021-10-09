import React from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import commonStyles from '../../MixIn/commonStyles';
import Colors from '../../Constants/Colors';

const ProgressBlock = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (props.active) {
          Alert.alert('Справка', props.description);
        } else {
          Alert.alert('', 'Не разблокировано');
        }
      }}>
      <View
        style={[
          styles.containerBase,
          props.active ? styles.containerActive : styles.containerInactive,
        ]}>
        <Text style={[commonStyles.text, {color: Colors.darkBlue}]}>
          {props.text}
        </Text>

        {props.active ? (
          <Image
            source={require('../../../assets/images/check-mark.png')}
            style={styles.image}
          />
        ) : (
          <Image
            source={require('../../../assets/images/lock.png')}
            style={styles.image}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProgressBlock;
