// connection handler

const net = require('net');

//set up the connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  }
  );
  //event handler
  conn.on('connect', () => {
    console.log('connected to the multiplayer snek game');
  });
  conn.on('data', (anyData) => {
    console.log('message:', anyData);
  });

  //set up data interpreting for any incoming data(messages)
  conn.setEncoding('utf8');

  return conn;
};

module.exports = connect;