const uuidV4 = require("uuid/v4");

/**
 * createUser
 * @prop id {String}
 * @prop name {String}
 * @param {String}
 */
const createUser = name => ({
  id: uuidV4(),
  name
});

/**
 * createChat
 * @prop id{String}
 * @prop name{String}
 * @prop messages {Array}
 * @prop users {Array}
 * @param {Object}
 *      name {String}
 *      messages {Array}
 *      users {Array}
 */
const createChat = ({ name = "Community", users = [] } = {}) => ({
  id: uuidV4(),
  name,
  messages: [createMessage({ message: `Welcome to ${name} chat` })],
  users,
  notification: 0,
  typingUsers: []
});

/**
 * createMessage
 * @prop id{String}
 * @prop type{String}
 * @prop time {Date}
 * @prop sender {String}
 * @prop message {String}
 * @param {String}
 *      sender {String}
 *      message {String}
 *      type {String}
 */
const createMessage = ({ sender = "", message = "" } = {}) => ({
  id: uuidV4(),
  sender,
  message,
  time: new Date()
});

/**
 * getTime
 * @param  {Date}
 * @return a string in 24hrs format eg '11:43'
 */

module.exports = {
  createUser,
  createChat,
  createMessage
};
