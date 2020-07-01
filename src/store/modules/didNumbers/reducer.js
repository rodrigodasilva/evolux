import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  didNumbers: [],
  loadingList: true,
  loadingCreate: false,
  responseFromCreation: false,
  loadingUpdate: false,
  responseFromUpdate: false,
  loadingDelete: false,
  responseFromDelete: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.LIST_REQUEST: {
        draft.loadingList = true;
        draft.responseFromCreation = false;
        break;
      }
      case types.LIST_SUCCESS: {
        draft.didNumbers = action.payload.didNumbers;
        draft.loadingList = false;
        break;
      }
      case types.LIST_FAILURE: {
        draft.loadingList = false;
        break;
      }

      case types.CREATE_REQUEST: {
        draft.loadingCreate = true;
        draft.responseFromCreation = false;
        break;
      }
      case types.CREATE_SUCCESS: {
        draft.loadingCreate = false;
        draft.responseFromCreation = action.payload.success;
        break;
      }
      case types.CREATE_FAILURE: {
        draft.loadingCreate = false;
        draft.responseFromCreation = action.payload.success;
        break;
      }

      case types.UPDATE_REQUEST: {
        draft.loadingUpdate = true;
        draft.responseFromUpdate = false;
        break;
      }
      case types.UPDATE_SUCCESS: {
        draft.loadingUpdate = false;
        draft.responseFromUpdate = action.payload.success;
        draft.didNumbers = action.payload.didNumbers;
        break;
      }
      case types.UPDATE_FAILURE: {
        draft.loadingUpdate = false;
        draft.responseFromUpdate = action.payload.success;
        break;
      }

      case types.DELETE_REQUEST: {
        draft.loadingDelete = true;
        draft.responseFromDelete = false;
        break;
      }
      case types.DELETE_SUCCESS: {
        draft.loadingDelete = false;
        draft.responseFromDelete = action.payload.success;
        break;
      }
      case types.DELETE_FAILURE: {
        draft.loadingDelete = false;
        draft.responseFromDelete = action.payload.success;
        break;
      }

      default:
    }
  });
}
