const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const fizzBuzzEmitter = new MyEmitter();

const eventName = 'FizzBuzz';

fizzBuzzEmitter.on(eventName, function (nbr) {
  if (nbr % 5 == 0) {
    console.log('Buzz');
  } else if (nbr % 3 == 0) {
    console.log('Fizz');
  } else {
    console.log("doesn't pass number : ", nbr);
  }
});
fizzBuzzEmitter.emit(eventName, 10);
fizzBuzzEmitter.emit(eventName, 6);
fizzBuzzEmitter.emit(eventName, 7);
