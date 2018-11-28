const connectedUsers = new Map();
const { createUser, createChat, createMessage } = require("./helper");
const chats = [
  createChat(),
  createChat({ name: "Developers" }),
  createChat({ name: "Brain Storm " })
];

function checkUserAlreadyExists(user, chatList) {
  return chatList.has(user);
}

function addUser(user, usersList) {
  usersList.set(user.name, user);
}

function removeUser(user, usersList) {
  usersList.delete(user);
}

module.exports = socket => {
  return (function(socket) {
    //handle user verification
    function handleVerification(user, cb) {
      if (checkUserAlreadyExists(user, connectedUsers)) {
        cb({ isUser: true, user: null });
      } else {
        socket.user = user;
        socket.room = "room";
        const newUser = createUser(user);
        addUser(newUser, connectedUsers);
        cb({ isUser: false, user: newUser });
      }
    }

    //handle get chats
    function handleGetChats(cb) {
      socket.join(socket.room, () => {
        cb(chats);
      });
    }

    //handle user joins a chat
    function handleUserJoined(user, chatId) {
      socket.emit("USER_JOINED", user, chatId);
      socket.broadcast.to(socket.room).emit("USER_JOINED", user, chatId);
    }

    function handleSentMessage(message, chatId) {
      const newMessage = createMessage({ sender: socket.user, message });
      socket.emit("ADD_MESSAGE", newMessage, chatId);
      socket.broadcast.to(socket.room).emit("ADD_MESSAGE", newMessage, chatId);
    }

    function handleTyping({ user, chatId }, isTyping) {
      socket.broadcast.emit("TYPING", { user, chatId }, isTyping);
    }

    return {
      handleVerification,
      handleGetChats,
      handleSentMessage,
      handleUserJoined,
      handleTyping
    };
  })(socket);
};
