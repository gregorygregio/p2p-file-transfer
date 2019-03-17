const fs = require('fs');

module.exports = (originSocket, body, p2p) => {
    body = body.trim();
    fs.access("./share/"+body, (err) => {
        if(err)
            return originSocket.write(`--message File '${body}' not found message--`)

        fs.readFile("./share/" + body, (err, data) => {
            if(err) throw err;
            console.log("transfering ",body)
            originSocket.write("--fileTransfer " + data + "  fileTransfer--");
        })
    })
    

}