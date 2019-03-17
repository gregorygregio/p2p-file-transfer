module.exports = (p2p, command) => {
    p2p.broadcast("--listFiles " + command.data + " listFiles--");
}