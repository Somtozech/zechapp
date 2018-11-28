const io = require("../server").io;
const handler = require("./handlers");

module.exports = function(socket) {
  const {
    handleVerification,
    handleGetChats,
    handleSentMessage,
    handleUserJoined,
    handleTyping,
    handleDisconnect
  } = handler(socket);
  console.log(socket.id + " connected");

  socket.on("VERIFY_USER", handleVerification);

  socket.on("GET_CHATS", handleGetChats);

  socket.on("ADD_MESSAGE", handleSentMessage);

  socket.on("USER_JOINED", handleUserJoined);

  socket.on("TYPING", handleTyping);

  socket.on("disconnect", handleDisconnect);
};
