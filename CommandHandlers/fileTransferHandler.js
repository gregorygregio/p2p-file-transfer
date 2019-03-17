const fs = require('fs');

module.exports = (socketOfOrigim, command, p2p) => {
    const oldOnData = p2p.onData;

    p2p.onData = (socket, data) => {
        if(socket !== socketOfOrigim)
            return oldOnData(socket, data);

        
        fs.writeFile("./received/recebido.txt", data, { flag: "a" },(err) => {
            if(err) throw err;
            console.log("Recebido buffer: ");
        })
    }
    
}