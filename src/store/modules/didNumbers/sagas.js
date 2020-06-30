import { all, takeLatest, call, put } from 'redux-saga/effects';
import parse from 'parse-link-header';

import types from './types';
import { didNumbersSuccess, didNumbersFailure } from './actions';

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
  } catch ({ response }) {
    yield put(didNumbersFailure());
  }
}

export default all([takeLatest(types.LIST_REQUEST, didNumbersRequest)]);
