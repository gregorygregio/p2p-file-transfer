# p2p-file-transfer
Nodejs p2p application for transfering files


<p>Small application that builds p2p connections between peers and allows those peers to transfer files that are in the "share" folder.
It listens for user's input commands. So far, these are the available commands:</p>
  <ul>
    <li>message > broadcasts a message to all peers</li>
    <li>connect-to (other peer's host:port) > creates a new connection</li>
    <li>list-files > ask for all peers to list their available files </li>
    <li>get-file --from=(host:port) > request a file from one of the peers</li>
 </ul>
 
 
 <p>For running the program, just run the index.js file via node, informing the port it will listen to:</p>
 <code> PORT=3000 node index.js</code>
 <br/><br/>
 <p>Then open another terminal and run the same command with a different port. You may pass the address of other peers to which the program will connect. Like this:</p>
 <code> PORT=3001 node index.js localhost:3000 192.168.0.51:3002</code>
 <br/><br/>
 
 <hr>
 
 <p>If you want to expose your peer outside your network, just use ngrok and open a tcp tunnel to your port</p>
 
 <code>./ngrok tcp 3000 </code><br>
 <code> PORT=3000 node index.js</code>
