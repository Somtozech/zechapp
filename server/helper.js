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
 * @prop id{String},
 * @prop name{String}
 * @prop messages {Array}
 * @prop users {Array}
 * @param {Object}
 *      name {String}
 *      messages {Array}
 *      users {Array}
 */
const createChat = ({
  name = "Community",
  messages = [],
  users = []
} = {}) => ({
  id: uuidV4(),
  name,
  messages,
  users,
  typingUsers: []
});

module.exports = {
  createUser,
  createChat
};
