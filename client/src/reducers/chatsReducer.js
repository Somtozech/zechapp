import {
  GET_CHATS,
  ADD_MESSAGE,
  USER_JOINED,
  ADD_NOTIFICATION,
  RESET_NOTIFICATION
} from "../actions/types";

export default function chatReducer(state = [], action) {
  switch (action.type) {
    case GET_CHATS:
      return action.payload;

    case ADD_MESSAGE: {
      const activeChatIndex = findChatIndex(state, action);
      const oldChat = state[activeChatIndex];
      const newChat = {
        ...oldChat,
        messages: messageReducer(oldChat.messages, action)
      };
      return [
        ...state.slice(0, activeChatIndex),
        newChat,
        ...state.slice(activeChatIndex + 1, state.length)
      ];
    }

    case USER_JOINED: {
      const activeChatIndex = findChatIndex(state, action);
      const oldChat = state[activeChatIndex];
      const newChat = {
        ...oldChat,
        users: oldChat.users.concat(action.payload)
      };
      return [
        ...state.slice(0, activeChatIndex),
        newChat,
        ...state.slice(activeChatIndex + 1, state.length)
      ];
    }

    case ADD_NOTIFICATION:
    case RESET_NOTIFICATION: {
      const activeChatIndex = findChatIndex(state, action);
      const oldChat = state[activeChatIndex];
      const newChat = {
        ...oldChat,
        notification: notifyReducer(oldChat.notification, action)
      };
      return [
        ...state.slice(0, activeChatIndex),
        newChat,
        ...state.slice(activeChatIndex + 1, state.length)
      ];
    }

    default:
      return state;
  }
}

function findChatIndex(chats, action) {
  return chats.findIndex(chat => chat.id === action.chatId);
}

function messageReducer(state = [], action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      return state.concat(action.message);
    }
  }
}

function notifyReducer(state = 0, action) {
  if (action.type === ADD_NOTIFICATION) return state + 1;
  else if (action.type === RESET_NOTIFICATION) return 0;
}
