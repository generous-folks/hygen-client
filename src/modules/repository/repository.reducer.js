import { FETCH_REPOSITORY } from './repository.actions';

export const initialState = {
  repository: false,
};

export const repositoryReducer = (state, action) => {
  switch (action.type) {
    case FETCH_REPOSITORY: {
      return { ...state, repository: true };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
