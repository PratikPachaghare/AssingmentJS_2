/* 
In JavaScript, the comma operator , allows you to combine multiple expressions into a single statement. It evaluates each expression from left to right and returns the value of the last expression. While not as common as other operators, the comma operator can be useful in specific situations, such as when you want to include multiple statements in a place where a single expression is expected.
*/

//  expression1, expression2, expression3, ..., expressionN   like this

// lets move towords the code of javascript

let a = 1, b = 2, c = 3;

// The comma operator is used to combine multiple expressions in a single statement
let result = (a++, b++, c++);

console.log(result); // Outputs the value of the last expression, which is the value of c after incrementing
console.log(a);      // Outputs 2
console.log(b);      // Outputs 3
console.log(c);      // Outputs 4
