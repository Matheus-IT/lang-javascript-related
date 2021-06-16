const arr = ['0', '1', '4', 'a', '9', 'c', '16'];
const my_obj = {
  [Symbol.iterator]: function*() {
    for(let index of arr) {
      yield `${index}`;
    }
  }
};
const all = [...my_obj]
  .map(i => parseInt(i, 10))
  .map(Math.sqrt)
  .filter((i) => i < 5)
  .reduce((i, d) => i + d);
console.log(all);

/* The gen function iterate every element of arr and output them,
the ... unpack all iteration into a new array.
For the new array, map apply a method to every element.
parseInt returns [0,1,4,NaN,9,NaN,16]
Math.sqrt returns [0,1,2,NaN,3,NaN,4]
filter select all elements less than 5, that's [0,1,2,3,4]
reduce applies a sum to them */
