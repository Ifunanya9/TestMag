export const createChat = (chat) => {
  return (dispatch, getState) => {
    dispatch({ type: "CREATE_PROJECT", chat });
  };
};
