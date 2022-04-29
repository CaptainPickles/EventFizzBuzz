const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const fizzBuzzEmitter = new MyEmitter();

const eventName = 'FizzBuzz';

function isDivibleBy3And5(nbr) {
  return nbr % 3 == 0 && nbr % 5 == 0;
}

fizzBuzzEmitter.on(eventName, function (nbr1) {});
fizzBuzzEmitter.emit(eventName, 5);
