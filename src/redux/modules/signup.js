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
      yield put({ type: authActions.loginStart });
      const { email, name, password, callbacks } = payload;
      try {
        const getUser = yield call(authServices.signup, { email });

        if (getUser.data.length > 0) {
          callbacks && callbacks.onFailed('Email already exists');
        } else {
          try {
            yield call(authServices.saveUserDatabase, { email, name, password });
            yield put({ type: authActions.loginSuccess, payload: { email, name, password } });
          } catch (error) {
            callbacks && callbacks.onFailed('Signup failed');
          }
        }
      } catch (error) {
        callbacks && callbacks.onFailed('Signup failed');
      }
    },
  },
};

//! Reducers
