const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const fizzBuzzEmitter = new MyEmitter();

const eventName = 'FizzBuzz';

fizzBuzzEmitter.on(eventName, function (nbr1, nbr2) {
  console.log(`his called nbr1: ${nbr1} nbr2: ${nbr2}`);
});
fizzBuzzEmitter.emit(eventName, 5, 12);
