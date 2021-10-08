import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const SimpleButton = props => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={[styles.container, props.containerStyle]}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default SimpleButton;
