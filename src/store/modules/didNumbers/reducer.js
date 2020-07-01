import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  didNumbers: [],
  // didNumber: {},
  loadingList: true,
  // loadingShow: true,
  loadingCreate: false,
  responseFromCreation: false,

  loadingUpdate: false,
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

      // case types.SHOW_REQUEST: {
      //   draft.loadingShow = true;
      //   break;
      // }
      // case types.SHOW_SUCCESS: {
      //   draft.didNumber = action.payload.didNumber;
      //   draft.loadingShow = false;
      //   break;
      // }
      // case types.SHOW_FAILURE: {
      //   draft.loadingShow = false;
      //   break;
      // }

      case types.CREATE_REQUEST: {
        draft.loadingCreate = true;
        draft.responseFromCreation = false;
        break;
      }
      case types.CREATE_SUCCESS: {
        draft.loadingCreate = false;
        // draft.didNumber = action.payload.didNumber;
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
        break;
      }
      case types.UPDATE_SUCCESS: {
        draft.loadingUpdate = false;
        draft.didNumbers = action.payload.didNumbers;
        break;
      }
      case types.UPDATE_FAILURE: {
        draft.loadingUpdate = false;
        break;
      }

      default:
    }
  });
}
