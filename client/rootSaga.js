import { all } from 'redux-saga/effects';
import postSaga from './modules/Post/PostSaga';

export default function* rootSaga() {
  yield all([
    postSaga()
  ]);
}
