"use strict"

// 1). Create a function that finds the maximum range of a triangle's
// third edge, where the side lengths are all integers.
// Examples
// nextEdge(8, 10) ➞ 17
// nextEdge(5, 7) ➞ 11
// nextEdge(9, 2) ➞ 10
// Notes
// ● (side1 + side2) - 1 = maximum range of third edge.
// ● The side lengths of the triangle are positive integers.
// ● Don't forget to return the result.

function nextEdge(side1, side2) {
  return (side1 + side2) - 1;
}
console.log(nextEdge(8, 10));
console.log(nextEdge(5, 7)); 
console.log(nextEdge(9, 2)); 



// 2). The right shift operation is similar to floor division by powers of
// two. Write a function that mimics (without the use of >>) the right
// shift operator and returns the result from the two given integers. Try
// to solve this challenge by recursion.

function rightShift(x, y) {
  if (y <= 0) {
    return x;
  } else {
    return rightShift(Math.floor(x / 2), y - 1);
  }
}
console.log(rightShift(16, 2)); 



// 3). Create a function that takes numbers b and m as arguments and
// returns the second derivative of the function f(x)=x^b +x* (e^(b*m))
// with respect to x evaluated at x=m, where b and m are constants.

function secondDerivative(b, m) {
  return b * (b - 1) * Math.pow(m, b - 2);
}
console.log(secondDerivative(3, 2));


// 4). This Triangular Number Sequence is generated from a pattern of
// dots that form a triangle. The first 5 numbers of the sequence, or
// dots, are:
// 1, 3, 6, 10, 15

// This means that the first triangle has just one dot, the second one
// has three dots, the third one has 6 dots and so on.
// Write a function that returns the cumulative sum of the number of
// all the previous (including current) dots when given its
// corresponding triangle number of the sequence.

// Figure: Triangular Number Sequence

// Examples
// triangle(1) ➞ 1
// triangle(6) ➞ 56 (1+3+6+10+15+21)

function triangle(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(triangle(1));
console.log(triangle(6)); 


// 5). Given a total due and an array representing the amount of
// change in your pocket, determine whether or not you are able to pay
// for the item. Change will always be represented in the following
// order: quarters, dimes, nickels, pennies.
// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true,
// since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives
// you 6.25 + 2 + .25 + 0 = 8.50.
// Examples
// changeEnough([2, 100, 0, 0], 14.11) ➞ false

// changeEnough([0, 0, 20, 5], 0.75) ➞ true
// changeEnough([30, 40, 20, 5], 12.55) ➞ true
// Notes
// ● quarter: 25 cents / $0.25
// ● dime: 10 cents / $0.10
// ● nickel: 5 cents / $0.05
// ● penny: 1 cent / $0.01

function changeEnough(change, amount_due) {
  let total_change = change[0]*0.25 + change[1]*0.1 + change[2]*0.05 + change[3]*0.01;
  return total_change >= amount_due;
}
console.log(changeEnough([2, 100, 0, 0], 14.11)); 
console.log(changeEnough([0, 0, 20, 5], 0.75)); 
console.log(changeEnough([30, 40, 20, 5], 12.55)); 
