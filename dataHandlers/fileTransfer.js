const fs = require('fs');

module.exports = (originSocket, body, p2p) => {
    fs.writeFile("./received/" + originSocket.transferingFileName, body, { flag:"a"}, (err) => {
        if(err) throw err;
    });
}