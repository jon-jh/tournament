const net = require('net');
// connection handler
//set up the connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  }
  );

  //event handler
  //set up data interpreting for any incoming data(messages)
  conn.setEncoding('utf8');
  
  conn.on('connect', () => {
    console.log('connected to the multiplayer snek game');
    conn.write('Name: GUY');
    // testing to send up command non stop
    setInterval(() => conn.write('Move: up'), 1000);
  });
  
  conn.on('data', (anyData) => {
    console.log('message:', anyData);
  });

  return conn;
};




module.exports = { connect };