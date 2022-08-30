import { combineReducers as combineReducersRedux } from 'redux';

import { authSaga, authReducer } from './auth';
import { signupSaga } from './signup';
import { userProfileSaga, userReducer } from './userprofile';
import { checkinSaga } from './checkin';

const combineSaga = {
  ...authSaga,
  ...signupSaga,
  ...userProfileSaga,
  ...checkinSaga,
};

const combineReducers = combineReducersRedux({
  authReducer,
  userReducer,
});

export { combineSaga, combineReducers };
