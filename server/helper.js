const uuidV4 = require("uuid/v4");

/**
 * createUser
 * @prop id {String}
 * @prop name {String}
 * @param {String}
 */
const createUser = (name) => ({
    id: uuidV4(),
    name
})

module.exports = {
    createUser
}