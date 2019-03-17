const fs = require('fs');

module.exports = (socketOfOrigim, command, p2p) => {
    fs.readdir("./share", (err, files) => {
        if(err) throw err;
        socketOfOrigim.write("/files-list "  + JSON.stringify(files) );
    });
}