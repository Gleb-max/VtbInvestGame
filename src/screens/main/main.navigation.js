import React from 'react';

//navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//tab screens
import {MainNavigation} from '../MainScreen';
// import { NewsNavigation } from 'screens/NewsScreen';
// import { AnalyticsNavigation } from 'screens/AnalyticsScreen';
// import { AdvicesNavigation } from 'screens/AdvicesScreen';
import {ProfileNavigation} from '../ProfileScreen';

//features navigators
import {DocumentDetailNavigation} from '../DocumentDetail';

//components
import {TabBarContainer} from '../../library/components/molecules';

import {ProgressScreen} from '../ProgressScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

//routes
const mapRouteNameToData = {
  'main/home': {
    route: 'main/home',
    label: 'Home',
    iconName: 'ic_tabbar_home',
  },
  'main/uk': {
    route: 'main/uk',
    label: 'UK',
    iconName: 'ic_tabbar_uk',
  },
  'main/graphics': {
    route: 'main/graphics',
    label: 'Graphics',
    iconName: 'ic_tabbar_graphics',
  },
  'main/drop': {
    route: 'main/drop',
    label: 'Drop',
    iconName: 'ic_tabbar_drop',
  },
  'main/account': {
    route: 'main/account',
    label: 'Account',
    iconName: 'ic_tabbar_account',
  },
};

const routes = [
  {
    ...mapRouteNameToData['main/home'],
    screen: MainNavigation,
  },
  // {
  // 	...mapRouteNameToData['main/uk'],
  // 	screen: NewsNavigation,
  // },
  // {
  // 	...mapRouteNameToData['main/graphics'],
  // 	screen: AnalyticsNavigation,
  // },
  // {
  // 	...mapRouteNameToData['main/drop'],
  // 	screen: AdvicesNavigation,
  // },
  {
    ...mapRouteNameToData['main/account'],
    screen: ProfileNavigation,
  },
];

const HomeNativeStack = createNativeStackNavigator();
const HomeTabs = createBottomTabNavigator();

export const HomeNavigation = ({
  notifications = {
    'main/home': 0,
    'main/uk': 0,
    'main/graphics': 0,
    'main/drop': 0,
    'main/account': 0,
  },
}) => {
  //data
  const routeData = React.useMemo(() => {
    return routes.reduce(
      (acc, tab) => ({
        ...acc,
        [tab.route]: {
          ...mapRouteNameToData[tab.route],
          notificationsCount: notifications[tab.route],
        },
      }),
      {},
    );
  }, [notifications]);

  //renders
  const _renderTabBar = React.useCallback(
    props => <TabBarContainer mapRouteNameToData={routeData} {...props} />,
    [routeData],
  );

  const _renderPages = React.useCallback(() => {
    return routes.map(({route, screen}) => (
      <HomeTabs.Screen name={route} component={screen} key={route} />
    ));
  }, []);

  const _renderBottomTabBar = React.useCallback(() => {
    return (
      <HomeTabs.Navigator
        screenOptions={{headerShown: false, stackAnimation: 'default'}}
        tabBar={_renderTabBar}>
        {_renderPages()}
      </HomeTabs.Navigator>
    );
  }, [_renderPages, _renderTabBar]);

  return (
    <HomeNativeStack.Navigator
      screenOptions={{headerShown: false, stackAnimation: 'default'}}>
      <HomeNativeStack.Screen name="main" component={_renderBottomTabBar} />
      <HomeNativeStack.Screen
        name="document_detail"
        component={DocumentDetailNavigation}
      />

      {/* <HomeNativeStack.Screen
				name='notifications'
				component={NotificationsNavigation} />

			<HomeNativeStack.Screen
				name='announcements'
				component={AnnouncementsNavigation} />

			<HomeNativeStack.Screen
				name='receipts'
				component={ReceiptsNavigation} />

			<HomeNativeStack.Screen
				name='mastercall'
				component={CallingMasterNavigation} />

			<HomeNativeStack.Screen
				name='support'
				component={SupportNavigation} />

			<HomeNativeStack.Screen
				name='contacts'
				component={ContactsNavigation} />

			<HomeNativeStack.Screen
				name='reqregister'
				component={RegistarionRequestNavigation} />

			<HomeNativeStack.Screen
				name='reqhistory'
				component={RequestHistoryNavigation} />

			<HomeNativeStack.Screen
				name='reqdetails'
				component={RequestDetailsNavigation} />

			<HomeNativeStack.Screen
				name='adviceitem'
				component={AdviceItemNavigation} />

			<HomeNativeStack.Screen
				name='info'
				component={InformationNavigation} />

			<HomeNativeStack.Screen
				name='account'
				component={AccountNavigation} />

			<HomeNativeStack.Screen
				name='devices'
				component={DevicesNavigation} />

			<HomeNativeStack.Screen
				name='metersettings'
				component={MeterSettingsNavigation} />

			<HomeNativeStack.Screen
				name='meterphoto'
				component={MeterPhotoNavigation} />

			<HomeNativeStack.Screen
				name='newdevice'
				component={NewDeviceNavigation} />

			<HomeNativeStack.Screen
				name='successnewdevice'
				component={SuccessNewDeviceNavigation} />

			<HomeNativeStack.Screen
				name='userschedules'
				component={UserSchedulesNavigation} />

			<HomeNativeStack.Screen
				name='schedulesettings'
				component={ScheduleSettingsNavigation} />

			<HomeNativeStack.Screen
				name='contact'
				component={DeleteNumberNavigation} />

			<HomeNativeStack.Screen
				name='newcontact'
				component={NewNumberNavigation} /> */}
    </HomeNativeStack.Navigator>
  );
};
