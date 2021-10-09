const welcomeComplete = (state = {}, action) => {
  switch (action.type) {
    case 'WELCOME_COMPLETE':
      return {
        isWelcomeComplete: true,
      };
    default:
      return state;
  }
};

export default welcomeComplete;
