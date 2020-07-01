import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import parse from 'parse-link-header';

import types from './types';
import {
  didNumbersSuccess,
  didNumbersFailure,
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
} from './actions';

import apiDidNumbers from '../../../services/core/http/didNumbers';

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

export function* updateRequest({ payload }) {
  try {
    const oldStateDidNumbers = yield select(
      ({ didNumbers }) => didNumbers.didNumbers
    );

    const updatedDidNumber = yield call(apiDidNumbers.update, payload);

    const { data, ...paginationInfo } = oldStateDidNumbers;

    const updatedDataDidNumbers = data.map(didNumber =>
      didNumber.id === updatedDidNumber.id ? updatedDidNumber : didNumber
    );

    const updatedStateDidNumbers = {
      data: updatedDataDidNumbers,
      ...paginationInfo,
    };

    yield put(
      updateSuccess({ success: true, didNumbers: updatedStateDidNumbers })
    );
  } catch (e) {
    yield put(updateFailure({ success: false }));
  }
}

export default all([
  takeLatest(types.LIST_REQUEST, didNumbersRequest),
  takeLatest(types.CREATE_REQUEST, createRequest),
  takeLatest(types.UPDATE_REQUEST, updateRequest),
]);
