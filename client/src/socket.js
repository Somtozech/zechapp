import io from "socket.io-client";
import { VERIFY_USER, GET_CHATS } from "./actions/types";

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
