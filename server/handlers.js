const connectedUsers = new Map();
const { createUser } = require("./helper");

function checkUserAlreadyExists(user, chatList) {
  return chatList.has(user);
}

function addUser(user, chatList) {
  chatList.set(user.name, user);
}

function removeUser(user, chatList) {
  chatList.delete(user);
}

module.exports = socket => {
  return (function(socket) {
    function handleVerification(user, cb) {
      if (checkUserAlreadyExists(user, connectedUsers)) {
        cb({ isUser: true, user: null });
      } else {
        const newUser = createUser(user);
        addUser(newUser, connectedUsers);
        cb({ isUser: false, user: newUser });
      }
    }

    return {
      handleVerification
    };
  })(socket);
};
