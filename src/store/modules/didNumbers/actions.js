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

export const createRequest = didNumber => ({
  type: types.CREATE_REQUEST,
  payload: { didNumber },
});
export const createSuccess = ({ success }) => ({
  type: types.CREATE_SUCCESS,
  payload: { success },
});
export const createFailure = ({ success }) => ({
  type: types.CREATE_FAILURE,
  payload: { success },
});

export const updateRequest = didNumber => ({
  type: types.UPDATE_REQUEST,
  payload: { didNumber },
});
export const updateSuccess = ({ success, didNumbers }) => ({
  type: types.UPDATE_SUCCESS,
  payload: { success, didNumbers },
});
export const updateFailure = ({ success }) => ({
  type: types.UPDATE_FAILURE,
  payload: { success },
});

export const deleteRequest = id => ({
  type: types.DELETE_REQUEST,
  payload: { id },
});
export const deleteSuccess = ({ success }) => ({
  type: types.DELETE_SUCCESS,
  payload: { success },
});
export const deleteFailure = ({ success }) => ({
  type: types.DELETE_FAILURE,
  payload: { success },
});
