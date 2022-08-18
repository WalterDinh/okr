import { put, call } from '@redux-saga/core/effects';
import axios from 'axios';
import { USER_URL } from 'constants/api';
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
      const { email, password, keepLoggedIn } = payload;
      try {
        const getUser = yield call(() => axios.get(`${USER_URL}?email=${email}&password=${password}`));
        if (getUser.data.length > 0) {
          const user = getUser.data[0];
          keepLoggedIn && authServices.saveUserLocalStorage({ email, isLogged: true });
          yield put({ type: authActions.loginSuccess, payload: user });
        } else {
          yield put({ type: authActions.loginFailed, payload: 'Email or password is incorrect' });
        }
      } catch (error) {
        yield put({ type: authActions.loginFailed, payload: 'Login failed' });
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
