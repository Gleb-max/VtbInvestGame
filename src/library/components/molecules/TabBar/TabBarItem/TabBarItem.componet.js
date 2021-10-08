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
	const contentColor = (isFocused) ? '#005670' : '#000000';

	return (
		<Pressable
			onPress={onPress}
			android_ripple={{
				color: '#DCDCDC',
			}}
			style = {styles.button}
		>
			<SMIcons
				size={isFocused ? 24.55 : 21}
				// size={24}
				// width={isFocused ? 24.55 : 18.41}
				// height={isFocused ? 22.54 : 16.91}
				color={contentColor}
				// style={[style, {}]}
				style={[style, !isFocused && styles.unfocusedIcon]}
				name={_iconName} />
		</Pressable>
	);
};
