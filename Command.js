module.exports = class Command {
    constructor() {
        this.command = "";
        this.data="";
        this.options = [];
    };

    addOption(opt) {
        if(opt.split("=").length === 2) {
            const [ name, value ] = opt.split("=");
            this.options.push({name, value});
            return;
        }
            
        this.options.push({ name: opt, value: "" });
    }
}