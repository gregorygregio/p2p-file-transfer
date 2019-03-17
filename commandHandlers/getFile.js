module.exports = (p2p, command) => {
    const fromOpt = command.options.find( opt => opt.name === "from");
    if(!fromOpt)
        return console.log("You must inform the alias from which you want to get the file");

    if(command.data==="")
        return console.log("You must inform a file name");

    const socket = p2p.connections.find( socket => socket.alias === fromOpt.value)

    if(!socket)
        return console.log("There is no socket with that alias");

    socket.transferingFileName = command.data;

    socket.write("--getFile " + command.data + " getFile--");
}