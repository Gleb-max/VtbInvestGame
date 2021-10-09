export const welcomeComplete = () => {
  return async dispatch => {
    dispatch({
      type: 'WELCOME_COMPLETE',
    });
  };
};
