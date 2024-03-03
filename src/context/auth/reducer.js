const reducerMethod = (state, action) => {
  switch (action.type) {
    case "IS_ADMIN":
      return { isAdmin: true };
    case "ADMIN_LOGOUT":
      return { isAdmin: false };
    default:
      return null;
  }
};

export default reducerMethod;
