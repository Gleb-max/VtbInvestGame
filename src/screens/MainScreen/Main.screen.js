/* eslint-disable prettier/prettier */
import React from 'react';

//navigation
import { useNavigation } from '@react-navigation/native';

//views
import { MainView } from './Main.view';

//types
// type MainScreenProps = {

// };

//constants
const _dummyData = {
	Кухня: {
		cold: 1221,
		hot: 812,
		date: '18.01 00:00',
	},
	Гостиная: {
		cold: 176.21,
		hot: 872,
		date: '16.01 23:00',
	},
	Зал: {
		cold: 612,
		hot: 1022,
		date: '17.01 19:00',
	},
};

export const MainScreen = ({

}) => {
	//navigation
	const navigation = useNavigation();

	//callbacks
	const _onNotifications = React.useCallback(() => {
		navigation.navigate('notifications');
	}, [navigation]);

	const _onProfile = React.useCallback(() => {
		navigation.navigate('main/account');
	}, [navigation]);

	const _onMeterCard = React.useCallback(() => {
		navigation.navigate('devices');
	}, [navigation]);

	const _onAnalytics = React.useCallback(() => {
		navigation.navigate('main/graphics');
	}, [navigation]);

	const _onAnnouncements = React.useCallback(() => {
		navigation.navigate('announcements');
	}, [navigation]);

	const _onReceipts = React.useCallback(() => {
		navigation.navigate('receipts');
	}, [navigation]);

	const _onMasterCall = React.useCallback(() => {
		navigation.navigate('mastercall');
	}, [navigation]);

	return (
		<MainView
			onAnalytics={_onAnalytics}
			onAnnouncements={_onAnnouncements}
			onNotifications={_onNotifications}
			onReceipts={_onReceipts}
			onMasterCall={_onMasterCall}
			onProfile={_onProfile}
			onMeterCard={_onMeterCard}
			analytics={{
				period: 'ноябрь',
				total: 8642.12,
			}}
			indexData={_dummyData}
			notificationCount={3}
			receiptAmount={1}
			userData={{
				name: 'Дарья',
				photo: 'https://dl.dropboxusercontent.com/s/z6za7u2f7evp0yh/55xhNW_MTk8.jpg?dl=0',
			}} />
	);
};
