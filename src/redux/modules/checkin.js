import { put, call } from '@redux-saga/core/effects';
import produce from 'immer';
import checkinServices from 'services/checkinServices';

//! Actions
export const checkinActions = {
  postCheckin: 'postCheckin',
  postMeeting: 'postMeeting',
};

//! Sagas
export const checkinSaga = {
  [checkinActions.postCheckin]: {
    saga: function* ({ payload }) {
      const { callbacks, data } = payload;
      try {
        yield call(checkinServices.postCheckin, data);
        callbacks && callbacks.onSuccess();
      } catch (error) {
        callbacks && callbacks.onFailed();
      }
    },
  },
  [checkinActions.postMeeting]: {
    saga: function* ({ payload }) {
      const { callbacks, data } = payload;
      try {
        yield call(checkinServices.postCheckinMeeting, data);
        callbacks && callbacks.onSuccess();
      } catch (error) {
        callbacks && callbacks.onFailed(error);
      }
    },
  },
};
