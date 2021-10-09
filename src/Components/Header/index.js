import React from 'react';
import {Text} from 'react-native';
import commonStyles from '../../MixIn/commonStyles';
import Colors from '../../Constants/Colors';

export const Header = props => {
  return (
    <Text
      style={[
        {...commonStyles.text, fontSize: 25, color: Colors.darkBlue},
        props.style,
      ]}>
      {props.text}
    </Text>
  );
};
