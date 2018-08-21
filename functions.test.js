const functions = require('./functions');

test("returnTwo() should return 2.", () => {
  expect( functions.returnTwo() ).toEqual( 2 );
});

test("greeting('jake') should return 'Hello, jake'", () => {
  expect( functions.greeting('jake') ).toEqual( 'Hello, jake' );
  expect( functions.greeting('ashley') ).toEqual( 'Hello, ashley' );
});

test("add(1, 2) should return 3.", () => {
  expect( functions.add(1, 2) ).toEqual( 3 );
});