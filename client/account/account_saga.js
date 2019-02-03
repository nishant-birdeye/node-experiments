import { takeLatest, put, call, select } from 'redux-saga/effects';

import {
  ACCOUNT_ACTIONS,
  setSessionUser,
  noSessionFound
} from './account_actions';

import callApi from '../util/apiCaller';

function* getSessionUser() {
  return yield call(callApi, 'auth/me');
}

function* redirectIfUserNotLoggedIn() {
  const
    { userAccount } = yield select();

  if (!userAccount.noSessionFound) {
    try {
      const
        response = (yield getSessionUser()),
        fetchedUser = response.user;
      if (fetchedUser) {
        yield put(setSessionUser({ user: fetchedUser }));
      } else {
        yield put(noSessionFound());
      }
    } catch (e) {
      yield put(noSessionFound());
      console.error(e.message, e.reponse);
    }
  }
}

export default function*  missionsSagas() {
  yield takeLatest(ACCOUNT_ACTIONS.CHECK_SESSION, redirectIfUserNotLoggedIn);
}
