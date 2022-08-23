import { put, call } from '@redux-saga/core/effects';
import produce from 'immer';
import { isEmpty } from 'lodash';
import authServices from 'services/authServices';
import httpServices from 'services/httpServices';
import { userProfileActions } from './userprofile';

//! Actions
export const authActions = {
  login: 'login',
  loginSuccess: 'loginSuccess',
  logout: 'logout',
  logoutSuccess: 'logoutSuccess',
  checkAuth: 'checkAuth',
};

//! Sagas
export const authSaga = {
  [authActions.checkAuth]: {
    saga: function* () {
      const { user, token } = authServices.getUserLocalStorage();
      if (!isEmpty(user)) {
        yield put({ type: userProfileActions.setUser, payload: user });
        yield put({ type: authActions.loginSuccess });
        httpServices.attachTokenToHeader(token);
      }
    },
  },
  [authActions.logout]: {
    saga: function* () {
      yield put({ type: authActions.logoutSuccess });
      authServices.clearUserLocalStorage();
      window.location.reload();
    },
  },
  [authActions.login]: {
    saga: function* ({ payload }) {
      const { email, password, keepLoggedIn, callbacks } = payload;
      try {
        const { data, ...rest } = yield call(authServices.login, { email, password });
        const { token, user } = data;
        if (token) {
          httpServices.attachTokenToHeader(token);
          keepLoggedIn && authServices.saveUserLocalStorage({ user, token });
          yield put({ type: authActions.loginSuccess });
          yield put({ type: userProfileActions.setUser, payload: user });
          callbacks && callbacks.onSuccess();
        } else {
          callbacks && callbacks.onFailed('Email or password is incorrect');
        }
      } catch (error) {
        callbacks && callbacks.onFailed('Login failed');
      }
    },
  },
};

//! Reducers
export const authReducer = (
  state = {
    auth: {
      isLogin: false,
    },
  },
  action,
) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case authActions.loginSuccess: {
        draftState.auth.isLogin = true;
        break;
      }

      case authActions.logoutSuccess: {
        draftState.auth.isLogin = false;
        break;
      }

      default:
        break;
    }
  });
};
