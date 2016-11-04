var counter = 1;

function increment() {
  counter++;
  console.log(counter);
}

function decrement() {
  counter--;
  console.log(counter);
}

module.exports = {
  counter: counter,
  increment: increment,
  decrement: decrement
};
