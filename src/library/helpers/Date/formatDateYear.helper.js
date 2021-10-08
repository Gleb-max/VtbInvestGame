/* eslint-disable prettier/prettier */
//helpers
import { formatDate } from './formatDate.helper';
import { formatYear } from './formatYear.helper';

export const formatDateYear = (date) => {
	return `${formatDate(date)} ${formatYear(date)}`;
};

