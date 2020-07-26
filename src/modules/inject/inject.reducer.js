import { SET_PATH, SET_INJECT_FORM_FIELD, SET_INJECT_FORM } from './inject.actions';

export const initialState = {
  path: null,
  form: {},
};

export const injectReducer = (state, action) => {
  switch (action.type) {
    case SET_PATH: {
      return { ...state, path: action.path };
    }

    case SET_INJECT_FORM: {
      return { ...state, form: action.form };
    }

    case SET_INJECT_FORM_FIELD: {
      return { ...state, form: { ...state.form, ...action.field } };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
