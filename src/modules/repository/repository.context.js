import React from 'react';

import { repositoryReducer, initialState } from './repository.reducer';

import { dispatchThunk } from '../../utils/context.utils';
import { CHILDREN_PROP_TYPES } from '../../constants/proptypes.constants';

const RepositoryStateContext = React.createContext();
const RepositoryDispatchContext = React.createContext();

const RepositoryProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(repositoryReducer, initialState);

  return (
    <RepositoryStateContext.Provider value={state}>
      <RepositoryDispatchContext.Provider value={dispatchThunk(dispatch)}>
        {children}
      </RepositoryDispatchContext.Provider>
    </RepositoryStateContext.Provider>
  );
};

RepositoryProvider.propTypes = {
  children: CHILDREN_PROP_TYPES,
};

function useRepositoryState() {
  const context = React.useContext(RepositoryStateContext);
  if (context === undefined) {
    throw new Error('useRepositoryState must be used within a RepositoryProvider');
  }
  return context;
}

function useRepositoryDispatch() {
  const context = React.useContext(RepositoryDispatchContext);
  if (context === undefined) {
    throw new Error('useRepositoryDispatch must be used within a RepositoryProvider');
  }
  return context;
}

function useRepository() {
  return [useRepositoryState(), useRepositoryDispatch()];
}

export { RepositoryProvider, useRepository, useRepositoryState, useRepositoryDispatch };
