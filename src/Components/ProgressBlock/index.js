import React from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import commonStyles from '../../MixIn/commonStyles';
import Colors from '../../Constants/Colors';
import FastImage from 'react-native-fast-image';

const ProgressBlock = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (props.active) {
          Alert.alert(
            'Справка',
            props.description,
            [{text: 'OK', onPress: () => {}, style: 'cancel'}],
            {cancelable: true},
          );
        } else {
          Alert.alert(
            '',
            'Не разблокировано',
            [{text: 'OK', onPress: () => {}, style: 'cancel'}],
            {cancelable: true},
          );
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
          <FastImage
            source={require('../../../assets/images/check-mark.png')}
            style={styles.image}
          />
        ) : (
          <FastImage
            source={require('../../../assets/images/lock.png')}
            style={styles.image}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProgressBlock;
