const Command = require('./Command');
const commandHash = require('./commandHash');


module.exports = class CommandHandler {

    constructor(p2p) {
        this.p2p = p2p;
    }

    handle(data) {
        if(data.indexOf("/") !== 0)
            return console.log("Invalid command format. A command should start with '/' ");

        const command  = this.getCommandFromInput(data);
        

        if( !Object.keys(commandHash).includes(command.command))
            return console.log("Command not found");

        const commandHandlerClass = commandHash[command.command];
        commandHandlerClass(this.p2p, command);
    }

    getCommandFromInput(data) {
        const command = new Command();

        const actualData = [];

        data.split(" ").forEach( chunk => {
            if(chunk.indexOf("/") === 0 )
                return command.command = chunk.replace("/", "");

            if(chunk.indexOf("--") === 0 )
                return command.addOption(chunk.replace("--", ""));

            actualData.push(chunk);
            
        });

        command.data = actualData.join(" ");

        return command;
    }

}