import { createLogMessage } from "./helper";
import {
  handleGetChats,
  handleSentMessage,
  handleReceivedMessage,
  handleUserJoined,
  handleOnUserJoined,
  handleTyping,
  handleOnTyping,
  handleDisconnect
} from "../socket";

import {
  GET_CHATS,
  SET_ACTIVECHAT,
  RESET_ACTIVECHAT,
  ADD_MESSAGE,
  USER_JOINED,
  ADD_NOTIFICATION,
  RESET_NOTIFICATION,
  TYPING,
  STOP_TYPING,
  DISCONNECT
} from "./types";

//checks if a user is a member of a chat
function checkIfMember(user, chat) {
  return !!chat.users.find(u => u.id === user.id);
}

//find a chat from the chatList with its chatId
function findChat(chats, chatId) {
  return chats.find(chat => chat.id === chatId);
}

//get all available chats
export const getChats = () => dispatch => {
  handleGetChats(chats => {
    dispatch({
      type: GET_CHATS,
      payload: chats
    });
  });
};

//makes a chat active
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

//reset active chat to null
export const ResetActiveChat = () => dispatch => {
  dispatch({
    type: RESET_ACTIVECHAT
  });
};

//sends the message and chatId to the server
export const AddMessage = (msg, chatId) => dispatch => {
  handleSentMessage(msg, chatId);
};

//receives the new message from the server
export const RecievedMessage = () => (dispatch, getState) => {
  handleReceivedMessage((message, chatId) => {
    const { activeChatId, user, chats } = getState();
    const chat = findChat(chats, chatId);
    const isChatMember = checkIfMember(user, chat);

    dispatch({
      type: ADD_MESSAGE,
      chatId,
      message
    });

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

//sends the user and the chat the user wants to to the server
export const UserJoined = (user, chatId) => dispatch => {
  handleUserJoined(user, chatId);
};

//receives the user and the chat the user joined from the server
export const OnUserJoined = () => (dispatch, getState) => {
  handleOnUserJoined((user, chatId) => {
    const { user: stateUser, chats } = getState();
    const chat = findChat(chats, chatId);
    dispatch({
      type: USER_JOINED,
      payload: user,
      chatId
    });
    if (user.id === stateUser.id) {
      dispatch({
        type: ADD_MESSAGE,
        chatId,
        message: createLogMessage(`you joined ${chat.name}`)
      });
    } else {
      dispatch({
        type: ADD_MESSAGE,
        chatId,
        message: createLogMessage(`${user.name} joined`)
      });
    }
  });
};

//emits the typing events to the server
export const UpdateTyping = isTyping => (dispatch, getState) => {
  const { user, activeChatId } = getState();
  handleTyping({ user, chatId: activeChatId }, isTyping);
};

//receives the typing events from the server
export const OnUserTyping = () => (dispatch, getState) => {
  handleOnTyping(({ user: name, chatId }, isTyping) => {
    const { activeChatId, chats, user } = getState();
    const chat = findChat(chats, chatId);
    const isChatMember = checkIfMember(user, chat);
    if (isChatMember) {
      if (isTyping) {
        if (activeChatId === chatId) {
          dispatch({
            type: TYPING,
            chatId: activeChatId,
            user: name
          });
        }
      } else if (!isTyping) {
        dispatch({
          type: STOP_TYPING,
          chatId: activeChatId,
          user: name
        });
      }
    }
  });
};

//user disconnects;
export const UserDisconnect = () => (dispatch, getState) => {
  handleDisconnect(user => {
    const { activeChatId, chats } = getState();
    const chat = activeChatId && findChat(chats, activeChatId);
    /**
     * review section
     */
    const isChatMember = checkIfMember(user, chat);
    if (activeChatId && !!isChatMember) {
      dispatch({
        type: ADD_MESSAGE,
        chatId: activeChatId,
        message: createLogMessage(`${user.name} left`)
      });
    }
  });
};
