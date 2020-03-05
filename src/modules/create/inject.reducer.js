import { REQUEST_ARTICLES, RECEIVED_ARTICLES } from './inject.actions';

export const initialState = {
  inject: [],
};

export const injectReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_ARTICLES: {
      return state;
    }
    case RECEIVED_ARTICLES: {
      return { ...state, inject: [...state.inject, ...action.inject] };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
