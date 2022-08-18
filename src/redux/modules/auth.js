import { put, call } from '@redux-saga/core/effects';
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
      yield put({ type: authActions.loginStart });
      const { email, password, keepLoggedIn, callbacks } = payload;
      try {
        const getUser = yield call(authServices.login, { email, password });
        if (getUser.data.length > 0) {
          const user = getUser.data[0];
          keepLoggedIn && authServices.saveUserLocalStorage({ email, isLogged: true });
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
        draftState.user = { ...action.payload };
        break;
      }

      default:
        break;
    }
  });
};
