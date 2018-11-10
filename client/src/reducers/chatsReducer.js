import { GET_CHATS } from "../actions/types";

export default function activeChatIdReducer(state = [], action) {
  switch (action.type) {
    case GET_CHATS:
      return action.payload;
    default:
      return state;
  }
}
