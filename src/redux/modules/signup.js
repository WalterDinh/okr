import { put, call } from '@redux-saga/core/effects';
import { authActions } from './auth';
import authServices from 'services/authServices';

//! Actions
export const signupActions = {
  signup: 'signup',
};

//! Sagas
export const signupSaga = {
  [signupActions.signup]: {
    saga: function* ({ payload }) {
      const { email, name, password, callbacks } = payload;
      try {
        yield call(authServices.signup, { email, password, full_name: name });
      } catch (error) {
        if (error.response.status === 500) {
          callbacks && callbacks.onSuccess();
        } else {
          callbacks && callbacks.onFailed('Signup failed');
        }
      }
    },
  },
};

//! Reducers
