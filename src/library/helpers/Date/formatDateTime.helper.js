/* eslint-disable prettier/prettier */
//helpers
import { formatDate } from './formatDate.helper';
import { formatTime } from './formatTime.helper';

export const formatDateTime = (date) => {
	return `${formatDate(date)} ${formatTime(date)}`;
};

