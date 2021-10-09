import {combineReducers} from 'redux';

import welcomeReducer from './welcome.reducer';

const reducers = {
  welcomeReducer,
};

const appReducer = combineReducers(reducers);

export const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGGED_OUT_SUCCESS') {
    state = {welcomeReducer: {isWelcomeComplete: true}};
  }

  return appReducer(state, action);
};
