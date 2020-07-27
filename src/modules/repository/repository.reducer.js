import { FETCH_REPOSITORY, SET_FILES } from './repository.actions';

export const initialState = {
  repository: '',
  files: [],
};

export const repositoryReducer = (state, action) => {
  switch (action.type) {
    case FETCH_REPOSITORY: {
      return { ...state, repository: action.name };
    }

    case SET_FILES:
      return { ...state, files: action.files };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
