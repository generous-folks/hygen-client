import { useState } from 'react';
import _ from 'lodash';

const emptyObject = {};

export const useInput = (defaultState = '') => {
  const [value, setValue] = useState(defaultState);

  return [value, setValue];
};

export const useInputGroupFormat = defaultState => {
  const [state, set] = useInput(defaultState);

  return { value: state, set };
};

const inputGroupReducer = defaultState => (acc, current) => ({
  ...acc,
  [current]: useInputGroupFormat(defaultState),
});

export const useInputGroup = (inputNamesList, defaultState) => {
  const inputGroup = inputNamesList.reduce(inputGroupReducer(defaultState), emptyObject);

  const getInputValue = name => _.get(inputGroup, `${name}.value`, '');
  const getInputSetter = name => _.get(inputGroup, `${name}.set`, _.noop);

  const handleInput = event => getInputSetter(event.target.name)(event.target.value);

  return [inputGroup, handleInput, getInputValue];
};
