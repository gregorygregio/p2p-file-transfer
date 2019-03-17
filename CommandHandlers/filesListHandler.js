module.exports = (socketOfOrigim, command, p2p) => {
    const fileList = JSON.parse(command.data);

    console.log(`From: ${socketOfOrigim.alias}`);
    fileList.forEach( file => {
        console.log(file)
    });
    
}