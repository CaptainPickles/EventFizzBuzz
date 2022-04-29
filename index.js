const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const fizzBuzzEmitter = new MyEmitter();

const eventName = 'FizzBuzz';

function isDivibleBy3And5(nbr) {
  return nbr % 3 == 0 && nbr % 5 == 0;
}
console.log(
  'test on 15 : ',
  isDivibleBy3And5(15),
  ' test on 5 : ',
  isDivibleBy3And5(5)
);

fizzBuzzEmitter.on(eventName, function (nbr1) {
  console.log(`his called nbr1: ${nbr1}`);
});
fizzBuzzEmitter.emit(eventName, 5);
