import { RECONNECT, RECONNECT_ERROR, RECONNECTING } from "../actions/types";

export default function statusReducer(state = "", action) {
  switch (action.type) {
    case RECONNECT:
    case RECONNECTING:
    case RECONNECT_ERROR:
      return action.payload;
    default:
      return state;
  }
}
