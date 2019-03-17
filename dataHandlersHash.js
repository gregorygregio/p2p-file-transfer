const message = require('./dataHandlers/message');
const listFiles = require('./dataHandlers/listFiles');
const filesList = require('./dataHandlers/filesList');
const getFile = require('./dataHandlers/getFile');
const fileTransfer = require('./dataHandlers/fileTransfer');


module.exports = {
    message,
    listFiles,
    filesList,
    getFile,
    fileTransfer
}