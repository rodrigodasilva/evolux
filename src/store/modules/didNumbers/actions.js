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

// export const didNumberRequest = ({ id }) => ({
//   type: types.SHOW_REQUEST,
//   payload: { id },
// });
// export const didNumberSuccess = didNumber => ({
//   type: types.SHOW_SUCCESS,
//   payload: { didNumber },
// });
// export const didNumberFailure = () => ({
//   type: types.SHOW_FAILURE,
// });

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
export const updateSuccess = ({ success, didNumber }) => ({
  type: types.UPDATE_SUCCESS,
  payload: { success, didNumber },
});
export const updateFailure = ({ success }) => ({
  type: types.UPDATE_FAILURE,
  payload: { success },
});
