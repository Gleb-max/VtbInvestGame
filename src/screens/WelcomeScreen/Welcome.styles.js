/* eslint-disable prettier/prettier */
import { DimensionsManager } from '../../library/modules/DimensionsManager';
import { StyleSheet } from 'react-native';
import { Helpers } from '../../library/theme';
import Colors from '../../Constants/Colors';

const styles = StyleSheet.create({
	text: {
	  paddingHorizontal: 30,
	  textAlign: 'center',
	},
	sliderText: {
	  alignSelf: 'center',
	  color: Colors.black,
	},
	infoContainer: {
	  marginTop: 'auto',
	  marginBottom: 'auto',
	  justifyContent: 'center',
	},
  });
  

export default styles;
