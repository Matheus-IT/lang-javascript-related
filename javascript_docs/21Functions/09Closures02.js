/* A closure is a function having access to the parent scope, even
after the parent function has closed. */

/* The self-invoking function only runs once. It sets the counter to zero (0), and
returns a function expression.
- It makes it possible for a function to have "private" variables.
- The counter is protected by the scope of the anonymous function, and can only be
changed using the add function */

var makeCounter = (function () {
  var count = 0;
  return function () {
    count += 1;
    return count;
  }
})();

var doCount = makeCounter();

for (let i = 0; i < 3; i++) {
  console.log(doCount());
}
