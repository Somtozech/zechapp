const io = require("../server").io;
const handler = require("./handlers");

module.exports = function(socket) {
  const { handleVerification } = handler(socket);
  console.log(socket.id + " connected");

  socket.on("VERIFY_USER", handleVerification);
};
