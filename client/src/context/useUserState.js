import { useReducer } from "react";
import UserStateContext from "./UserContext";

const initialState = {
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "login": {
      return {
        ...state,
        user: action.user,
      };
    }
    case "logout": {
      return {
        ...state,
        user: null,
      };
    }
    default: {
      throw new Error();
    }
  }
}

export default function useUserState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    StateProvider: function ({ children }) {
      return (
        <UserStateContext.Provider value={{ state, dispatch }}>
          {children}
        </UserStateContext.Provider>
      );
    },
    StateContext: UserStateContext,
  };
}
