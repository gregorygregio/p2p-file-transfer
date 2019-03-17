const me = require('../me');
const fs = require('fs');

module.exports = (socketOfOrigim, command, p2p) => {
    const fromOpt = command.options.find(  opt => opt.name.toLowerCase() === "from");

    if(!fromOpt) return;

    if(me.myAddress() !== fromOpt.value) return;


    fs.access("./share/"+command.data, (err) => {
        if(err)
            return socketOfOrigim.write("/message File "+command.data+" not found");

        socketOfOrigim.write("/file-transfer");

        fs.readFile("./share/"+command.data, (err, data) => {
            socketOfOrigim.write(data);
        })
    })
    
}