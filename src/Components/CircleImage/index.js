import React from 'react';
import {Image} from 'react-native';
import Colors from '../../Constants/Colors';

export const CircleImage = props => {
  const baseSize = 40;
  return (
    <Image
      source={props.source}
      style={{
        borderRadius: props.size || baseSize,
        height: props.size || baseSize,
        width: props.size || baseSize,
        backgroundColor: Colors.darkBlue,
      }}
    />
  );
};


