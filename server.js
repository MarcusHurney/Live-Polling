import express from 'express';
import path from 'path';

const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {

    res.send(__dirname + '/public/index.html'); //serves index.html when home route is hit

});

app.get('*', function (req, res) {
	res.sendFile(path.resolve(__dirname + '/public/index.html'));
});

const server = app.listen(3000);

// create socket server to listen on port 3000
const io = require('socket.io').listen(server);

// variable for keeping track of all open connections
const connections = [];

// variable for title of presentation
let title = 'Big Money NOW';

// create connection event
io.sockets.on('connection', (socket) => {

  // define disconnect handler
  socket.once('disconnect', () => {
    // remove current socket from connections array
    connections.splice(connections.indexOf(socket), 1);
    // incase server hasn't registered client's disconnect, forcibly disconnect
    socket.disconnect();
    console.log("Disconnected: %s sockets remaining.", connections.length);
  });

  // push new connection id to connections array
  connections.push(socket.id);
  console.log("Connected: %s sockets connected.", connections.length);

  // emit custom welcome event
  socket.emit('welcome', {
    title
  });
});

console.log('Node server started on port 3000');
