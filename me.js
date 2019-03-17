if(!process.env.PORT || isNaN(process.env.PORT))
    throw Error("You must inform the enviroment variable PORT !");

const networkAddress = require('network-address');

const port = process.env.PORT;
const ip = networkAddress.ipv4();


module.exports = {
    port,
    ip,
    myAddress: () => ip+":"+port
 };