import React, { useReducer } from "react";
import AuthContext from "./context";
import reducer from "./reducer";

const AuhtState = ({ children }) => {
  const initialState = {
    isAdmin: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const isAdminChangeHandler = () => dispatch({ type: "IS_ADMIN" });

  const adminLogoutHandler = () => dispatch({ type: "ADMIN_LOGOUT" });

  return (
    <AuthContext.Provider
      value={{
        isAdmin: state.isAdmin,
        isAdminChangeHandler,
        adminLogoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuhtState;
