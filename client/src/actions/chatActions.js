import { handleGetChats } from "../socket";
import { GET_CHATS, SET_ACTIVECHAT } from "./types";

export const getChats = () => dispatch => {
  handleGetChats(chats => {
    dispatch({
      type: GET_CHATS,
      payload: chats
    });
  });
};

export const setActiveChat = id => ({
  type: SET_ACTIVECHAT,
  payload: id
});
