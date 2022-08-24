import { combineReducers as combineReducersRedux } from 'redux';

import { authSaga, authReducer } from './auth';
import { signupSaga } from './signup';
import { userProfileSaga, userReducer } from './userprofile';

const combineSaga = {
  ...authSaga,
  ...signupSaga,
  ...userProfileSaga,
};

const combineReducers = combineReducersRedux({
  authReducer,
  userReducer,
});

export { combineSaga, combineReducers };
