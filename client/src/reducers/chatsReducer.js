import { GET_CHATS, ADD_MESSAGE } from "../actions/types";

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
    default:
      return state;
  }
}

function findChatIndex(chats, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      return chats.findIndex(chat => chat.id === action.chatId);
    }
  }
}

function messageReducer(state = [], action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      return state.concat(action.message);
    }
  }
}
