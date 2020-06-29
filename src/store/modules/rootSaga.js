import { all } from 'redux-saga/effects';

import didNumbers from './didNumbers/sagas';

export default function* rootSaga() {
  return yield all([didNumbers]);
}
