/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable, StyleProp, ViewStyle, View } from 'react-native';

//styles
import styles from './TabBarItem.styles';

//components
import { SMIcons } from '../../../atoms';

export const TabBarItem = ({
	isFocused,
	iconName,
	onPress,
	style,
}) => {
	const _iconName = (isFocused) ? iconName : (iconName + '_active');
	const contentColor = (isFocused) ? '#5C3661' : '#AFAFAF';

	return (
		<Pressable
			onPress={onPress}
			android_ripple={{
				color: '#DCDCDC',
			}}
			style = {styles.button}
		>
			<SMIcons
				size={isFocused ? 25 : 21}
				color={contentColor}
				// style={[style, {}]}
				style={style}
				name={_iconName} />
		</Pressable>
	);
};
