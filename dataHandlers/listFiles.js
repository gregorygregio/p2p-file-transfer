const fs = require('fs');
module.exports = (originSocket, body, p2p) => {
    fs.readdir("./share", (err, files) => {
        if(err) throw err;

        originSocket.write("--filesList " + JSON.stringify(files));
    })
}