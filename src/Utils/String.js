export const getSpacedValue = value => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
