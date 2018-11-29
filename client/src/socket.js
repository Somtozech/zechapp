import io from "socket.io-client";
import {
  VERIFY_USER,
  GET_CHATS,
  ADD_MESSAGE,
  USER_JOINED,
  TYPING,
  DISCONNECT
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
  socket.on(ADD_MESSAGE, cb);
};

export const handleUserJoined = (user, chatId) => {
  socket.emit(USER_JOINED, user, chatId);
};

export const handleOnUserJoined = cb => {
  socket.on(USER_JOINED, cb);
};

export const handleTyping = ({ user, chatId }, isTyping) => {
  socket.emit(TYPING, { user, chatId }, isTyping);
};

export const handleOnTyping = cb => {
  socket.on(TYPING, cb);
};

//handles the user disconnect when the user logs out or refreshes page
export const handleDisconnect = cb => {
  socket.on(DISCONNECT, cb);
};

//handles  reconnect error after reconnecting attempt
export const handleReconnectError = cb => {
  socket.on("reconnect_error", cb);
};

//handles reconnection of socket
export const handleReconnect = cb => {
  socket.on("reconnect", cb);
};

//handles reconnecting of socket
export const handleReconnecting = cb => {
  socket.on("reconnecting", cb);
};

//handles disconnect when there is server  or  no internet connection
export const handleUserDisconnect = cb => {
  socket.on("disconnect", cb);
};

export const handleSetUser = user => {
  socket.emit("SET_USER", user);
};
