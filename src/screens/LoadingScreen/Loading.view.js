import React from 'react';
import {View, Text} from 'react-native';

import {LogoImage} from '../../library/components';

//styles
import styles from './Loading.styles';

export const LoadingView = ({}) => {
  return (
    <View style={styles.container}>
      <LogoImage size={100} style={{}} />
    </View>
  );
};
