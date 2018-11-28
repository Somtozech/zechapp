import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import activeChatIdReducer from "./activeChatIdReducer";
import chatsReducer from "./chatsReducer";
import statusReducer from "./statusReducer";

export default combineReducers({
  user: authReducer,
  error: errorReducer,
  activeChatId: activeChatIdReducer,
  chats: chatsReducer,
  connectionStatus: statusReducer
});
