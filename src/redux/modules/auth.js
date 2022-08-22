import { put, call } from '@redux-saga/core/effects';
import produce from 'immer';
import { isEmpty } from 'lodash';
import authServices from 'services/authServices';
import httpServices from 'services/httpServices';

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
      const user = authServices.getUserLocalStorage();
      if (!isEmpty(user)) {
        yield put({ type: authActions.loginSuccess, payload: user });
        httpServices.attachTokenToHeader(user);
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
        console.log('data', data);
        const { token, user } = data;
        if (token) {
          httpServices.attachTokenToHeader(token);
          keepLoggedIn && authServices.saveUserLocalStorage(user);
          yield put({ type: authActions.loginSuccess, payload: user });
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
    user: {},
  },
  action,
) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case authActions.loginSuccess: {
        draftState.auth.isLogin = true;
        draftState.auth.user = action.payload;
        break;
      }

      case authActions.logoutSuccess: {
        draftState.auth.isLogin = false;
        draftState.auth.token = null;
        break;
      }

      default:
        break;
    }
  });
};
