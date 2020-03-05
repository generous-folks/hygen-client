import { SET_PATH, RECEIVED_ARTICLES } from './inject.actions';

export const initialState = {
  inject: [],
  path: null,
};

export const injectReducer = (state, action) => {
  switch (action.type) {
    case SET_PATH: {
      return { ...state, path: action.path };
    }
    case RECEIVED_ARTICLES: {
      return { ...state, inject: [...state.inject, ...action.inject] };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
