module.exports = (p2p, command) => {
    p2p.broadcast("--message " + command.data + " message--");
}