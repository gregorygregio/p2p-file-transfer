module.exports = (p2p, command) => {
    if(command.data.split(":").length !== 2)
        return console.log(command.data + " is not a valid address");

    const [ ip, port ] = command.data.split(":");
    p2p.connectTo({ip,port})
}