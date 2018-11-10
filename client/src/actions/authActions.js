import { SET_USER, VERIFY_USER, AUTH_FAILED, AUTH_SUCCESSFUL } from "./types";
import { handleVerification } from "../socket";

const setUser = user => {
  return {
    type: SET_USER,
    payload: user
  };
};

export const verifyUser = name => dispatch => {
  handleVerification(name, ({ user, isUser }) => {
    if (isUser) {
      dispatch({
        type: AUTH_FAILED
      });
    } else {
      dispatch({
        type: AUTH_SUCCESSFUL
      });

      dispatch(setUser(user));
    }
  });
};
