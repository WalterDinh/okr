import { put, call } from '@redux-saga/core/effects';
import produce from 'immer';
import { USER_URL } from 'constants/api';
import { authActions } from './auth';
import axios from 'axios';

//! Actions
export const signupActions = {
  signup: 'signup',
};

//! Sagas
export const signupSaga = {
  [signupActions.signup]: {
    saga: function* ({ payload }) {
      yield put({ type: authActions.loginStart });
      const { email, name, password } = payload;
      try {
        const getUser = yield call(() => axios.get('USER_URL' + `?email=${email}`));

        if (getUser.data.length > 0) {
          yield put({ type: authActions.loginFailed, payload: 'Email already exists' });
        } else {
          try {
            yield call(() => axios.post(USER_URL, { email, name, password }));
            yield put({ type: authActions.loginSuccess, payload: { email, name } });
          } catch (error) {
            yield put({ type: authActions.loginFailed, payload: { message: 'Signup failed' } });
          }
        }
      } catch (error) {
        yield put({ type: authActions.loginFailed, payload: 'Signup failed' });
      }
    },
  },
};

//! Reducers
