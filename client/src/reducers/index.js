import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import activeChatIdReducer from "./activeChatIdReducer";
import chatsReducer from "./chatsReducer";

export default combineReducers({
  user: authReducer,
  error: errorReducer,
  activeChatId: activeChatIdReducer,
  chats: chatsReducer
});
