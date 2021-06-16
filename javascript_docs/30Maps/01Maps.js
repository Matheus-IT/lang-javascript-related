const person = new Map([
	["name", "Matheus"],
	["age", 18],
	["gender", "male"]
]);

console.log(person.size);

/* An Object is similar to Map but there are important differences that make using 
a Map preferable in certain cases:
1) The keys can be any type including functions, objects, and any primitive.
2) You can get the size of a Map.
3) You can directly iterate over Map.
4) Performance of the Map is better in scenarios involving frequent addition and 
removal of key/value pairs 

Methods
-set(key, value) Adds a specified key/value pair to the map. If the specified key 
already exists, value corresponding to it is replaced with the specified value.
-get(key) Gets the value corresponding to a specified key in the map. If the specified 
key doesn't exist, undefined is returned.
-has(key) Returns true if a specified key exists in the map and false otherwise.
-delete(key) Deletes the key/value pair with a specified key from the map and returns 
true. Returns false if the element does not exist.
-clear() Removes all key/value pairs from map.
-keys() Returns an Iterator of keys in the map for each element.
-values() Returns an Iterator of values in the map for each element.
-entries() Returns an Iterator of array[key, value] in the map for each element.
*/
