import { all, call } from 'redux-saga/effects';
import { userSagas } from './local.sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas)
  ]);
}