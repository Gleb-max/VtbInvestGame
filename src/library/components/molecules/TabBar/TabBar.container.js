/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable curly */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ViewStyle } from 'react-native';

//components
import { TabBar } from './TabBar.component';

//types
import { Navigation } from 'library/types';
import { BottomTabBarOptions, BottomTabBarProps } from '@react-navigation/bottom-tabs';


export const TabBarContainer = ({
	mapRouteNameToData,
	state,
	descriptors,
	navigation,
	style,
}) => {
	//navigation
	const routes = state.routes;
	const currentIndex = state.index;

	//renders
	const tabsData = React.useMemo(() => {
		return routes.map((route, index) => {
			const { iconName, label, notificationsCount, disabled } = mapRouteNameToData[route.name];
			const { options } = descriptors[route.key];

			const name =
				(options.title !== undefined)
					? options.title
					: label;

			const isFocused = (currentIndex === index);

			const onPress = () => {
				const event = navigation.emit({
					type: 'tabPress',
					target: route.key,
					canPreventDefault: true,
				});

				if (!isFocused && !event.defaultPrevented)
					navigation.navigate(route.name);
			};

			const onLongPress = () => {
				navigation.emit({
					type: 'tabLongPress',
					target: route.key,
				});
			};

			return {
				isFocused,
				iconName,
				name,
				notificationsCount,
				disabled,
				onPress,
				onLongPress,
			};
		});
	}, [
		descriptors,
		mapRouteNameToData,
		navigation,
		routes,
		currentIndex,
	]);

	const focusedOptions = descriptors[routes[currentIndex].key].options;
	if (focusedOptions.tabBarVisible === false)
		return null;

	return (
		<TabBar
			tabsData={tabsData}
			currentIndex={currentIndex}
			style={style} />
	);
};
