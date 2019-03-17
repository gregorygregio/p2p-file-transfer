const P2P = require("./P2P");
const me = require("./me");


const p2p = new P2P(me);
const CommandHandler = require("./CommandHandler");

const commandHandler = new CommandHandler(p2p);


p2p.onData = (socket, data) => {
    commandHandler.handle(socket, data.toString());
}

process.argv.slice(2).forEach( seeder => {

    if(seeder.split(":").length !== 2)
        throw Error("Wrong format of seeder address suplied ! It must be ip:port ! Instead, "+seeder+" was informed !");

    const [ seederIp, seederPort ] = seeder.split(":");

    p2p.connectTo({ ip: seederIp, port: seederPort }, socket => {
        //do something on connection
    });

});


process.stdin.on('data', data => {
    p2p.broadcast(data.toString().replace(/\n/, ""));
})