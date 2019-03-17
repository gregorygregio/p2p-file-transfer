const net = require('net');

module.exports = class P2P {

    constructor({port,ip}) {

        this.port = port;
        this.ip = ip;
        this.connections = [];

        const server = net.createServer( (socket) => {
            const address = socket.address();
            socket.alias = address.address + ":" + address.port;
            this.onSocketConnected(socket);
        } );

        server.listen(port);
    }

    connectTo({ ip, port }, cb) {

        cb = cb || function(){};
        
        const socket = net.connect({ port, host: ip }, () => {
            socket.alias = ip + ":" + port;
            this.onSocketConnected(socket);
            cb(socket);
        });

        socket.on('error', error => {
            console.log(error.toString());
        });

    }


    broadcast(data) {
        this.connections.forEach(socket => socket.write(data));
    }

    onSocketConnected(socket) {
        this.connections.push(socket);
        

        socket.on('data', data => {
            this.onData(socket, data);
        });
    }

    onData(socket, data) { }


}