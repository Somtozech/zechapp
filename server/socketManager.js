const io = require("../server").io;
const handler = require("./handlers");

module.exports = function(socket) {
  const { handleVerification, handleGetChats } = handler(socket);
  console.log(socket.id + " connected");

  socket.on("VERIFY_USER", handleVerification);

  socket.on("GET_CHATS", handleGetChats);
};
