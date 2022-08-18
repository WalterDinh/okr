import { combineReducers as combineReducersRedux } from 'redux';

import { authSaga, authReducer } from './auth';
import { signupSaga } from './signup';

const combineSaga = {
  ...authSaga,
  ...signupSaga,
};

const combineReducers = combineReducersRedux({
  authReducer,
});

export { combineSaga, combineReducers };
