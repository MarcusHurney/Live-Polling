import express from 'express';
import path from 'path';
const http = require('http');
const app = express();
const socketIO = require('socket.io');
const server = http.createServer(app);
const io = socketIO(server);

import _ from 'underscore';

import questions from './questions';

app.use(express.static('public'));

app.get('/', function (req, res) {

    res.send(__dirname + '/public/index.html'); //serves index.html when home route is hit

});

app.get('*', function (req, res) {
	res.sendFile(path.resolve(__dirname + '/public/index.html'));
});


// variable for keeping track of all open connections
const connections = [];

// variable for title of presentation
let title = 'Untitled Presentation';

// variable for keeping track of all audience memebers
let audience = [];

// variable for keeping track of the speaker
let speaker = {};

let currentQuestion = false;

let results = {
  a: 0,
  b: 0,
  c: 0,
  d: 0
};


// create connection event
io.on('connection', socket => {

  // push new connection id to connections array
  connections.push(socket.id);
  console.log("Connected: %s sockets connected.", connections.length);

  // define disconnect handler -------------------->
  socket.on('disconnect', () => {
    // remove current socket from connections array
    connections.splice(connections.indexOf(socket), 1);

    // find member who disconnected
    const member = _.findWhere(audience, { id: socket.id });

    // if member is found...
    if (member) {
      // remove member from audience
      audience.splice(audience.indexOf(member), 1)

      // update the audience for all sockets
      io.emit('audienceUpdate', audience);

    } else if (socket.id === speaker.id) {

      console.log(`${speaker.name} has left.`);
      // reset speaker and title to defaults
      speaker = {};
      title = 'Untitled Presentation';

      io.emit('end', { title, speaker: '' });
    }
    // incase server hasn't registered client's disconnect, forcibly disconnect
    socket.disconnect();
    console.log("Disconnected: %s sockets remaining.", connections.length);
  }); // end disconnect handler -------------------->

  // define join event handler -------------------->
  socket.on('join', (payload) => {
    const newMember = {
      id: socket.id,
      name: payload.memberName,
      typeOfUser: 'member'
    };

    // push newMember to audience array
    audience.push(newMember);

    // send the entire updated audience array to EVERY connected socket
    io.emit('audienceUpdate', audience);

    // send the newMember back to the single connected socket
    socket.emit('joined', newMember);
  }); // end join handler -------------------->

  // define speakerJoined event handler -------------------->
  socket.on('speakerJoin', (payload) => {
    speaker.name = payload.speakerName;
    speaker.id = socket.id;
    speaker.typeOfUser = 'speaker';

    title = payload.title;

    // send speaker back to client
    // the 'joined' event is used just like with an audience member
    // this way, the speaker will be saved as userMember in the Redux Store
    // and can use the same views as an audience member, the type key differentiates them

    socket.emit('joined', speaker);

    io.emit('startPresentation', { title, speaker: speaker.name });
  });// end speakerJoin handler -------------------->


  // emit custom welcome event
  socket.emit('welcome', {
    title,
    audience,
    speaker: speaker.name,
    questions,
    currentQuestion,
    results
  });

  socket.on('ask', question => {
    // set currentQuestion to payload
    currentQuestion = question;
    // reset results Object
    results = {
      a: 0,
      b: 0,
      c: 0,
      d: 0
    };
    // send current question to connected audience memebers
    io.emit('ask', currentQuestion);
    console.log("Question Asked ", question.q);
  });

  socket.on('answer', ({ choice }) => {
    results[choice]++;
    // emit results back to client
    io.emit('results', results);
  });


});// end connection handler -------------------->

server.listen(3000, () => {
  console.log("Server is available on port 3000");
});
