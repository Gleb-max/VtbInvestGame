/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

//modules
import {DimensionsManager} from '../../../modules';

//components
import {SMIcons} from '../../atoms';
import {TabBarItem} from './TabBarItem';

//animations
// import Animated from 'react-native-reanimated';
// import { useTabsAnimation } from '../../../animations';

//styles
import styles, {
  CURSOR_TAB_OFFSET,
  TAB_BAR_BORDER_RADIUS,
} from './TabBar.styles';

export const TabBar = ({tabsData, currentIndex, style}) => {
  //animations
  const screenWidth = DimensionsManager.getScreenWidth();
  const tabWidth = screenWidth / tabsData.length - 5;

  // const tabsAnimation = useTabsAnimation(tabWidth, tabsData.length, CURSOR_TAB_OFFSET);

  //effects
  // React.useEffect(() => {
  // 	tabsAnimation.moveToIndex(currentIndex);
  // }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  //renders
  const _renderTabBarItems = React.useCallback(() => {
    return tabsData.map((tab, index) => {
      const leftStyle = {borderTopLeftRadius: TAB_BAR_BORDER_RADIUS};
      const rightStyle = {borderTopRightRadius: TAB_BAR_BORDER_RADIUS};

      return (
        <TabBarItem
          {...tab}
          key={tab.iconName}
          style={[
            styles.tabBarItem,
            index === 0 && leftStyle,
            index === tabsData.length - 1 && rightStyle,
          ]}
        />
      );
    });
  }, [tabsData]);

  return (
    <View style={[styles.container, style]}>
      {/* actual component size is smaller on borderRadius
			to allow content going under rounding (e.g. scrollview) */}
      <View style={styles.tabBarSpace} />

      <View style={styles.tabBar}>{_renderTabBarItems()}</View>
    </View>
  );
};
