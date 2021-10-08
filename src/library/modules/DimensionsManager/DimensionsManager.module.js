/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Dimensions, PixelRatio } from 'react-native';

//other deps
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { EdgeInsets, useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';

//initial values
const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');

const baseInsets = {
	top: getStatusBarHeight(true),
	right: 0,
	bottom: getBottomSpace(),
	left: 0,
};

//initializer
const getInitializer = (dimensionManager) => {
	const Initializer = () => {
		//callback
		const _onLayout = React.useCallback((event) => {
			const { width, height } = event.nativeEvent.layout;
			dimensionManager.updateDimensions(width, height);
		}, []);

		//update screen insets
		const insets = useSafeAreaInsets();
		dimensionManager.updateInsets(insets);

		return (
			<View
				pointerEvents='none'
				onLayout={_onLayout}
				style={StyleSheet.absoluteFillObject} />
		);
	};

	return Initializer;
};

//provider
const DimensionsProvider = SafeAreaProvider;

//manager
class DimensionsManager {
	Provider = DimensionsProvider;
	Initializer = getInitializer(this);
	insets = baseInsets;
	designScreenWidth = WINDOW_WIDTH;
	designScreenHeight = WINDOW_HEIGHT;
	 screenWidth = WINDOW_WIDTH;
	 screenHeight = WINDOW_HEIGHT;

	updateInsets(newInsets) {
		this.insets = newInsets;
	}

	updateDesignDimensions(designWidth, designHeight) {
		this.designScreenWidth = designWidth;
		this.designScreenHeight = designHeight;
	}

	updateDimensions(screenWidth, screenHeight) {
		this.screenWidth = screenWidth;
		this.screenHeight = screenHeight;
	}

	getScreenWidth = () => this.screenWidth;
	getScreenHeight = () => this.screenHeight;

	//helpers
	wp(widthPercent) {
		// Parse string percentage input and convert it to number
		const elemWidth =
			(typeof widthPercent === 'number') ? widthPercent
				: parseFloat(widthPercent);

		// Use PixelRatio.roundToNearestPixel method in order to round the layout
		// size (dp) to the nearest one that corresponds to an integer number of pixels
		return PixelRatio.roundToNearestPixel(this.screenWidth * elemWidth / 100);
	}

	hp(heightPercent, withStatusBar = false) {
		// Parse string percentage input and convert it to number
		const elemHeight =
			(typeof heightPercent === 'number') ? heightPercent
				: parseFloat(heightPercent);

		//consider status bar if flag passed
		const statusBarPart = (withStatusBar) ? 0 : -this.insets.top;

		// Use PixelRatio.roundToNearestPixel method in order to round the layout
		// size (dp) to the nearest one that corresponds to an integer number of pixels
		return PixelRatio.roundToNearestPixel((this.screenHeight + statusBarPart) * elemHeight / 100);
	}

	horizontalScale = (size) => (this.screenWidth / this.designScreenWidth) * size;
	verticalScale = (size) => (this.screenHeight / this.designScreenHeight) * size;
	moderateScale = (size, factor = 0.5) => size + (this.horizontalScale(size) - size) * factor;

	getStatusBarHeight = () => this.insets.top;
	getBottomInset = () => this.insets.bottom;

	getFullscreenModalHeight = () => this.screenHeight - this.insets.top - 10;
}

const instance = new DimensionsManager();
export { instance as DimensionsManager };
