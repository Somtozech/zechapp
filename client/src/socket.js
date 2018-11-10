import io from "socket.io-client";

const socketUrl = "http://localhost:3000";
const options = {
  transports: ["polling", "websocket"]
};

const socket = io.connect(
  socketUrl,
  options
);

export const handleVerification = (user, cb) => {
  socket.emit("VERIFY_USER", user, cb);
};
