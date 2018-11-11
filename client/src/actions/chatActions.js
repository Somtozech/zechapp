import {
  handleGetChats,
  handleSentMessage,
  handleReceivedMessage
} from "../socket";
import { GET_CHATS, SET_ACTIVECHAT, ADD_MESSAGE } from "./types";

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

export const AddMessage = (msg, chatId) => dispatch => {
  handleSentMessage(msg, chatId);
};

export const RecievedMessage = () => dispatch => {
  handleReceivedMessage((message, chatId) => {
    dispatch({
      type: ADD_MESSAGE,
      chatId,
      message
    });
  });
};
