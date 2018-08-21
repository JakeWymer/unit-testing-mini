const functions = require('./functions');

test("returnTwo() should return 2.", () => {
  expect( functions.returnTwo() ).toEqual( 2 );
});

test("greeting('jake') should return 'Hello, jake'", () => {
  expect( functions.greeting('jake') ).toEqual( 'Hello, jake' );
  expect( functions.greeting('ashley') ).toEqual( 'Hello, ashley' );
});


describe('Math Group', () => {
  test("add(1, 2) should return 3.", () => {
    expect( functions.add(1, 2) ).toEqual( 3 );
  });
  
  test("subtract(2, 1) should return 1.", () => {
    expect( functions.subtract(2, 1) ).toEqual( 1 );
  });

  test("multiply(1, 2) should return 2.", () => {
    expect( functions.multiply(1, 2) ).toEqual( 2 );
  });

  test("divide(10, 5) should return 2.", () => {
    expect( functions.divide(10, 5) ).toEqual( 2 );
  });
});