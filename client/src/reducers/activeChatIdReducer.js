import { SET_ACTIVECHAT, RESET_ACTIVECHAT } from "../actions/types";

export default function activeChatIdReducer(state = "", action) {
  switch (action.type) {
    case SET_ACTIVECHAT:
      return action.payload;
    case RESET_ACTIVECHAT:
      return "";
    default:
      return state;
  }
}
