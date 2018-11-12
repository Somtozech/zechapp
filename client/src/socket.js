import io from "socket.io-client";
import {
  VERIFY_USER,
  GET_CHATS,
  ADD_MESSAGE,
  USER_JOINED
} from "./actions/types";

const socketUrl = "http://localhost:3000";
const options = {
  transports: ["polling", "websocket"]
};

const socket = io.connect(
  socketUrl,
  options
);

export const handleVerification = (user, cb) => {
  socket.emit(VERIFY_USER, user, cb);
};

export const handleGetChats = cb => {
  socket.emit(GET_CHATS, cb);
};

export const handleSentMessage = (message, chatId) => {
  socket.emit(ADD_MESSAGE, message, chatId);
};

export const handleReceivedMessage = cb => {
  socket.on(ADD_MESSAGE, (message, chatId) => {
    cb(message, chatId);
  });
};

export const handleUserJoined = (user, chatId) => {
  socket.emit(USER_JOINED, user, chatId);
};

export const handleOnUserJoined = cb => {
  socket.on(USER_JOINED, cb);
};
