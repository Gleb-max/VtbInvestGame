import React from 'react';

//navigation
import {useRoute, useNavigation} from '@react-navigation/native';

//views
import {DocumentDetailView} from './DocumentDetail.view';

export const DocumentDetailScreen = ({}) => {
  //navigation
  const route = useRoute();
  const params = route.params;
  const item = params.details;
  // const item = {
  //   name: 'Название бумаги',
  //   cost: 1000,
  //   index: 'IMOEX',
  //   image: require('../../../assets/images/ruble.png'),
  //   delta: '0.05%',
  //   description: 'Ценная бумага, покупай быстрее!',
  //   country: 'США',
  // };
  return <DocumentDetailView item={item} />;
};
