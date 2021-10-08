/* eslint-disable prettier/prettier */
import { ImageStyle, StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';


const flattenStyle = (style, preserveArray = false) => {
	if (preserveArray) {
		if (!style)
			style = {};

		if (Array.isArray(style)) {
			const flattened = StyleSheet.flatten(style);

			return flattened;
		}
		else
			return style;
	}
	else
		return StyleSheet.flatten(style);
};

export default flattenStyle;
