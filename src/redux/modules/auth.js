import { put } from '@redux-saga/core/effects';
import produce from 'immer';
import authServices from 'services/authServices';

//! Actions
export const authActions = {
  login: 'login',
  loginStart: 'loginStart',
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
      const { email, password, keepLoggedIn, callbacks } = payload;

      if (email === 'don@gmail.com' && password === 'PQdon@123') {
        keepLoggedIn && authServices.saveUserLocalStorage({ email, isLogged: true });
        yield put({ type: authActions.loginSuccess });
        callbacks && callbacks.onSuccess();
      } else {
        yield put({ type: authActions.loginFailed });
        callbacks && callbacks.onFailed();
      }
    },
  },
};

//! Reducers
export const authReducer = (
  state = {
    auth: {
      isLogin: false,
      isLogging: false,
      error: null,
    },
    user: {},
  },
  action,
) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case authActions.loginStart: {
        draftState.auth.isLogging = true;
        draftState.auth.error = null;
        break;
      }

      case authActions.loginSuccess: {
        draftState.auth.isLogin = true;
        draftState.auth.isLogging = false;
        draftState.user = { ...action.payload };
        break;
      }

      case authActions.loginFailed: {
        draftState.auth.isLogging = false;
        draftState.auth.error = action.payload;
        break;
      }

      default:
        break;
    }
  });
};
