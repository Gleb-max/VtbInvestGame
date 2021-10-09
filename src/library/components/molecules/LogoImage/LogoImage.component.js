import React from 'react';
import {Image} from 'react-native';
import FastImage from 'react-native-fast-image';

//styles
import styles from './LogoImage.styles';

export const LogoImage = ({size, style}) => {
  return (
    <FastImage
      style={[styles.logo, {width: size, height: size}, style]}
      source={{
        uri: Image.resolveAssetSource(
          require('../../../../../assets/images/logo.png'),
        ).uri,
        priority: FastImage.priority.high,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};
