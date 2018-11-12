import {
  handleGetChats,
  handleSentMessage,
  handleReceivedMessage,
  handleUserJoined,
  handleOnUserJoined
} from "../socket";
import {
  GET_CHATS,
  SET_ACTIVECHAT,
  ADD_MESSAGE,
  USER_JOINED,
  ADD_NOTIFICATION,
  RESET_NOTIFICATION
} from "./types";

export const getChats = () => dispatch => {
  handleGetChats(chats => {
    dispatch({
      type: GET_CHATS,
      payload: chats
    });
  });
};

export const setActiveChat = id => dispatch => {
  dispatch({
    type: SET_ACTIVECHAT,
    payload: id
  });
  dispatch({
    type: RESET_NOTIFICATION,
    chatId: id
  });
};

export const AddMessage = (msg, chatId) => dispatch => {
  handleSentMessage(msg, chatId);
};

export const RecievedMessage = () => (dispatch, getState) => {
  handleReceivedMessage((message, chatId) => {
    const { activeChatId, user, chats } = getState();
    dispatch({
      type: ADD_MESSAGE,
      chatId,
      message
    });
    const chat = chats.find(chat => chat.id === chatId);
    const isChatMember = !!chat.users.find(u => u.id === user.id);
    if (isChatMember) {
      if (activeChatId === chatId) {
        dispatch({
          type: RESET_NOTIFICATION,
          chatId
        });
      } else {
        dispatch({
          type: ADD_NOTIFICATION,
          chatId
        });
      }
    }
  });
};

export const UserJoined = (user, chatId) => dispatch => {
  handleUserJoined(user, chatId);
};

export const OnUserJoined = () => dispatch => {
  handleOnUserJoined((user, chatId) => {
    dispatch({
      type: USER_JOINED,
      payload: user,
      chatId
    });
  });
};
