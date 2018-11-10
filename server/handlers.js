const connectedUsers = new Map();
const { createUser, createChat } = require("./helper");
const chats = [createChat()];

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
    //handle user verification
    function handleVerification(user, cb) {
      if (checkUserAlreadyExists(user, connectedUsers)) {
        cb({ isUser: true, user: null });
      } else {
        const newUser = createUser(user);
        addUser(newUser, connectedUsers);
        cb({ isUser: false, user: newUser });
      }
    }

    //handle get chats
    function handleGetChats(cb) {
      cb(chats);
    }

    return {
      handleVerification,
      handleGetChats
    };
  })(socket);
};
