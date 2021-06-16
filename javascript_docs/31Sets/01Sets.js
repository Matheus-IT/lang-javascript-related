let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);
console.log(set); //Set { 1, 2, 4, 59, 9 }
console.log(set.size); // 5


/*	A Set object can be used to hold unique values (no repetitions are allowed).
A value in a set can be anything (objects and primitive values) 

Methods
-add(value) Adds a new element with the given value to the Set.
-delete(value) Deletes a specified value from the set.
-has(value) Returns true if a specified value exists in the set and false 
otherwise.
-clear() Clears the set.
-values() Returns an Iterator of values in the set */
