import { SET_ACTIVECHAT } from "../actions/types";

export default function activeChatIdReducer(state = "", action) {
  switch (action.type) {
    case SET_ACTIVECHAT:
      return action.payload;
    default:
      return state;
  }
}
