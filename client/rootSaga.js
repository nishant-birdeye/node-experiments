import { all } from 'redux-saga/effects';
import postSaga from './modules/Post/PostSaga';
import accountSaga from './account/account_saga';

export default function* rootSaga() {
  yield all([
    postSaga(),
    accountSaga(),
  ]);
}
