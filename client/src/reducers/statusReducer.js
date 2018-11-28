import {
  RECONNECT,
  RECONNECT_ERROR,
  RECONNECTING,
  DISCONNECT
} from "../actions/types";

export default function statusReducer(state = "", action) {
  switch (action.type) {
    case RECONNECT:
    case RECONNECTING:
    case RECONNECT_ERROR:
    case DISCONNECT:
      return action.payload;
    default:
      return state;
  }
}
