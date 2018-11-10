import { SET_USER } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case SET_USER: {
      const newUser = action.payload;
      return {
        ...newUser
      };
    }
    default:
      return state;
  }
}
