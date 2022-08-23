import { put, call } from '@redux-saga/core/effects';
import produce from 'immer';
import userprofileServices from 'services/userprofileServices';

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
      try {
        yield call(userprofileServices.patchUser, { id, data });
        callbacks.onSuccess();
      } catch (error) {
        console.log(error);
        callbacks.onFailed('patch error:', error);
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
        callbacks.onFailed(error);
      }
    },
  },
  [userProfileActions.updateUserAva]: {
    saga: function* ({ payload }) {
      const { formData, callbacks } = payload;
      try {
        const res = yield call(userprofileServices.updateUserAvatar, { formData });
        callbacks.onSuccess(res.data.file);
      } catch (error) {
        console.log(error);
      }
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
        console.log('setData');
        draftState.user = action.payload;
        break;
      }

      default:
        break;
    }
  });
};
