import { takeLatest, put, call } from 'redux-saga/effects';

import {
  addPosts,
  FETCH_POST,
} from './PostActions';
import callApi from '../../util/apiCaller';

function* fetchPostsFromServer() {
  try {
    const response = (yield call(callApi, 'posts'));
    yield put(addPosts(response.posts));
  } catch (e) {
    yield console.error(e);
  }
}

export default function*  missionsSagas() {
  yield takeLatest(FETCH_POST, fetchPostsFromServer);
}
