/* ECMAScript 5 added a lot of new Object Methods to JavaScript: */
// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing many object properties
Object.defineProperties(object, descriptors)

// Accessing Properties
Object.getOwnPropertyDescriptor(object, property)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Returns enumerable properties as an array
Object.keys(object)

// Accessing the prototype
Object.getPrototypeOf(object)

// Prevents adding properties to an object
Object.preventExtensions(object)
// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents changes of object properties (not values)
Object.seal(object)
// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)
// Returns true if object is frozen
Object.isFrozen(object)

/*
        *** Changing Meta Data ***
    ES5 allows the following property meta data to be changed:
    writable : true      // Property value can be changed
    enumerable : true    // Property can be enumerated
    configurable : true  // Property can be reconfigured
    writable : false     // Property value can not be changed
    enumerable : false   // Property can be not enumerated
    configurable : false // Property can be not reconfigured
*/
//This example makes language read-only:
Object.defineProperty(person, "language", {writable:false});
//This example makes language not enumerable:
Object.defineProperty(person, "language", {enumerable:false});

/*
        *** Listing All Properties ***
    This example list all properties of an object:
*/
Object.getOwnPropertyNames(person);  // Returns an array of properties 
