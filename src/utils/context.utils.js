export const dispatchThunk = dispatch => param => {
  if (typeof param === 'function') {
    return param(dispatch);
  }

  return dispatch(param);
};

export const useSelector = (useStateHook, selector = state => state) => {
  if (!useStateHook) {
    throw new Error(
      'You need to provide the reducer hook of this resource to get its state and dispatch',
    );
  }

  const state = useStateHook();

  const selectedValue = selector(state);

  return selectedValue;
};
