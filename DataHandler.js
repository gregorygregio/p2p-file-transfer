const dataHandlersHash = require('./dataHandlersHash')

module.exports = class DataHandler {
    constructor (p2p){
        this.p2p = p2p;
    }

    handle(originSocket, data){
        data = data.toString();
        if(!originSocket.isStreaming) {
            originSocket.isStreaming = true;

            if(data.indexOf('--') !== 0)
                return originSocket.write("--message Invalid data message--");

            let [ prefix, ...body ] = data.split(" ");
            body = body.join(" ");
            prefix = prefix.replace("--", "");


            if( !Object.keys(dataHandlersHash).includes(prefix))
                return;

            originSocket.handler = dataHandlersHash[prefix];
            originSocket.streamingClose = prefix + "--";


            if(body.indexOf(originSocket.streamingClose) > -1) {
                originSocket.isStreaming = false;
                body = body.replace(originSocket.streamingClose, "");
                originSocket.streamingClose = null;
            }

            originSocket.handler(originSocket, body, this.p2p);

        } else {
            if(data.indexOf(originSocket.streamingClose) > -1) {
                originSocket.isStreaming = false;
                data = data.replace(originSocket.streamingClose, "");
                originSocket.streamingClose = null;
            }

            originSocket.handler(originSocket, data, this.p2p);
        }
        


    }
}