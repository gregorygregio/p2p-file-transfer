const message = require('./commandHandlers/message');
const connectTo = require('./commandHandlers/connectTo')
const listFiles = require('./commandHandlers/listFiles')
const getFile = require('./commandHandlers/getFile')

module.exports = {
    message,
    "connect-to": connectTo,
    "list-files":listFiles,
    "get-file": getFile
}