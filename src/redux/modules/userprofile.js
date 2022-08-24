import { put, call } from '@redux-saga/core/effects';
import produce from 'immer';
import userprofileServices from 'services/userprofileServices';
import authServices from 'services/authServices';

//! Actions
export const userProfileActions = {
  updateUser: 'updateUser',
  getUser: 'getUser',
  setUser: 'setUser',
  updateUserAva: 'updateUserAva',
};

//! Sagas
export const userProfileSaga = {
  [userProfileActions.updateUser]: {
    saga: function* ({ payload }) {
      const { id, data, callbacks } = payload;
      const { token } = authServices.getUserLocalStorage();

      try {
        yield call(userprofileServices.patchUser, { id, data });
        authServices.saveUserLocalStorage({ user: data, token: token });
        callbacks.onSuccess();
      } catch (error) {
        console.log(error);
        callbacks.onFailed();
      }
    },
  },
  [userProfileActions.getUser]: {
    saga: function* ({ payload }) {
      const { id, callbacks } = payload;
      try {
        const res = yield call(userprofileServices.getUser, { id });
        yield put({ type: userProfileActions.setUser, payload: res.data });
        callbacks.onSuccess();
      } catch (error) {
        callbacks.onFailed();
      }
    },
  },
  [userProfileActions.updateUserAva]: {
    saga: function* ({ payload }) {
      const { formData, callbacks } = payload;
      try {
        const res = yield call(userprofileServices.updateUserAvatar, { formData });
        callbacks.onSuccess(res.data.file);
      } catch (error) {}
    },
  },
};

//! Reducers
export const userReducer = (
  state = {
    user: {},
  },
  action,
) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case userProfileActions.setUser: {
        draftState.user = action.payload;
        break;
      }

      default:
        break;
    }
  });
};
