import types from './types';

export const didNumbersRequest = ({ page, limit }) => ({
  type: types.LIST_REQUEST,
  payload: { page, limit },
});
export const didNumbersSuccess = didNumbers => ({
  type: types.LIST_SUCCESS,
  payload: { didNumbers },
});
export const didNumbersFailure = () => ({
  type: types.LIST_FAILURE,
});
