import { put } from '@redux-saga/core/effects';
import produce from 'immer';
import authServices from 'services/authServices';

//! Actions
export const authActions = {
  login: 'login',
  loginSuccess: 'loginSuccess',
  loginFailed: 'loginFailed',
  logout: 'logout',
  logoutSuccess: 'logoutSuccess',
  checkAuth: 'checkAuth',
};

//! Sagas
export const authSaga = {
  [authActions.checkAuth]: {
    saga: function* () {
      const dataUser = authServices.getUserLocalStorage();
      if (!isEmpty(dataUser)) {
        yield put({ type: authActions.loginSuccess });
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
      const { username, password, callbacks } = payload;

      if (username === 'don' && password === 'don') {
        authServices.saveUserLocalStorage({ username, isLogged: true });
        yield put({ type: authActions.loginSuccess });
        callbacks && callbacks.onSuccess();
      } else {
        yield put({ type: authActions.loginFailed });
      }
    },
  },
};

//! Reducers
export const authReducer = (
  state = {
    auth: {
      isLogin: false,
      error: null,
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

      case authActions.loginFailed: {
        draftState.auth.isLogin = false;
        break;
      }

      default:
        break;
    }
  });
};
