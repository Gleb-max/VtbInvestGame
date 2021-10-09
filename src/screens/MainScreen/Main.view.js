/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';

//other deps
// import SwitchSelector from 'react-native-switch-selector';

//components
// import { PressableIcon, CustomDropDown } from 'library/components';

//styles
import styles from './Main.styles';
import DocumentDetail from '../DocumentDetail';
// import { GilroyText, SMIcons } from 'library/components/atoms';


export const MainView = ({
	receiptAmount,
	userData,
	analytics,
	indexData,
	notificationCount,
	onNotifications,
	onReceipts,
	onAnalytics,
	onMasterCall,
	onAnnouncements,
	onProfile,
	onMeterCard,
}) => {
	// //state
	// const [place, setPlace] = React.useState<string>('Кухня');
	// const [switchItem, setSwitchItem] = React.useState('cold');

	// const {
	// 	date,
	// 	cold,
	// 	hot,
	// } = indexData[place];

	// const activeTextColor = () => {
	// 	return switchItem === 'hot' ? '#FF5B5B' : '#005670';
	// };
	return (
		<DocumentDetail/>
	);
};
