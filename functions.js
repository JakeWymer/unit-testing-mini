const returnTwo = () => {
  return 2;
}

const greeting = (name) => {
  return `Hello, ${name}`;
}

const add = (x, y) => {
  return x + y;
}

const subtract = (x, y) => {
  return x - y;
}

const multiply = (x, y) => {
  return x * y;
}

const divide = (x, y) => {
  return x/y;
}

module.exports = {
  returnTwo,
  greeting,
  add,
  subtract,
  multiply,
  divide
}