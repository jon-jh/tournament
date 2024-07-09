const { connect } = require('./client');
console.log('connecting...');


// setupInput
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //below is how we handle user input, on data, run handleUserInput
  stdin.on('data', handleUserInput);
  return stdin;
};

//handleUserInput

const handleUserInput = function(keyPress) {
  if (keyPress === '\u0003') {
    process.exit();
  }
};


connect();
setupInput();