
// getters与vue computed方法同步

export const computedAdd = (state, data) => {
  return state.amt.list.join('');
};

export const submitData = (state, data) => {
  return state.amt.submitData;
};

