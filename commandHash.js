const message = require('./CommandHandlers/messageHandler');
const listFiles = require('./CommandHandlers/listFilesHandler');
const filesList = require('./CommandHandlers/filesListHandler');
const getFile = require('./CommandHandlers/getFileHandler');
const fileTransfer = require('./CommandHandlers/fileTransferHandler');

module.exports = {
    message,
    "list-files": listFiles,
    "files-list": filesList,
    "get-file": getFile,
    "file-transfer": fileTransfer,
}