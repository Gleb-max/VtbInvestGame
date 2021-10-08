/* eslint-disable prettier/prettier */
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';

export const formatYear = (date) => {
	return format(date, 'y', { locale: enGB });
};

