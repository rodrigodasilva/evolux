import { all, takeLatest, call, put } from 'redux-saga/effects';
import parse from 'parse-link-header';

import types from './types';
import {
  didNumbersSuccess,
  didNumbersFailure,
  // fundoSuccess,
  // fundoFailure,
  createSuccess,
  createFailure,
  // updateSuccess,
  // updateFailure,
} from './actions';

import apiDidNumbers from '../../../services/core/http/didNumbers';
// import history from '../../../services/history';

export function* didNumbersRequest({ payload }) {
  try {
    const response = yield call(apiDidNumbers.index, payload);

    const parsedPaginationLinks = parse(response.headers.link);

    const responseWithPaginationLinks = {
      data: response.data,
      total: Number(response.headers['x-total-count']),
      ...parsedPaginationLinks,
    };

    yield put(didNumbersSuccess(responseWithPaginationLinks));
  } catch (e) {
    yield put(didNumbersFailure());
  }
}

export function* createRequest({ payload }) {
  try {
    yield call(apiDidNumbers.store, payload);

    yield put(createSuccess({ success: true }));
  } catch (e) {
    yield put(createFailure({ success: false }));
  }
}

// export function* updateFundoWorker({ payload }) {
//   try {
//     yield call(apiDidNumbers.update, payload);
//     yield put(updateSuccess());

//     history.push('/fundos');
//   } catch ({ response }) {
//     yield put(updateFailure());
//   }
// }

export default all([
  takeLatest(types.LIST_REQUEST, didNumbersRequest),
  // takeLatest(types.SHOW_REQUEST, fundoWorker),
  takeLatest(types.CREATE_REQUEST, createRequest),
  // takeLatest(types.UPDATE_REQUEST, updateFundoWorker),
]);
