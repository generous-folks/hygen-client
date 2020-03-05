import React from 'react';

import { injectReducer, initialState } from './inject.reducer';

import { dispatchThunk } from '../../utils/context.utils';
import { CHILDREN_PROP_TYPES } from '../../constants/proptypes.constants';

const InjectStateContext = React.createContext();
const InjectDispatchContext = React.createContext();

const InjectProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(injectReducer, initialState);

  return (
    <InjectStateContext.Provider value={state}>
      <InjectDispatchContext.Provider value={dispatchThunk(dispatch)}>
        {children}
      </InjectDispatchContext.Provider>
    </InjectStateContext.Provider>
  );
};

InjectProvider.propTypes = {
  children: CHILDREN_PROP_TYPES,
};

function useInjectState() {
  const context = React.useContext(InjectStateContext);
  if (context === undefined) {
    throw new Error('useInjectState must be used within a InjectProvider');
  }
  return context;
}

function useInjectDispatch() {
  const context = React.useContext(InjectDispatchContext);
  if (context === undefined) {
    throw new Error('useInjectDispatch must be used within a InjectProvider');
  }
  return context;
}

function useInject() {
  return [useInjectState(), useInjectDispatch()];
}

export { InjectProvider, useInject, useInjectState, useInjectDispatch };
