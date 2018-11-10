import { AUTH_FAILED, AUTH_SUCCESSFUL } from "../actions/types";

export default function errorReducer(state = null, action) {
  switch (action.type) {
    case AUTH_FAILED: {
      return "Name already in use";
    }
    case AUTH_SUCCESSFUL: {
      return null;
    }
    default:
      return state;
  }
}
