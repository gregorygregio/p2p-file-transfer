module.exports = (originSocket, body, p2p) => {
    const filesList = JSON.parse(body);
    console.log("from: " + originSocket.alias);
    filesList.forEach( file => console.log(file))

}