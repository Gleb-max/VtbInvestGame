/* eslint-disable prettier/prettier */
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';

export const formatDate = (date) => {
	return format(date, 'dd MMM', { locale: enGB });
};

