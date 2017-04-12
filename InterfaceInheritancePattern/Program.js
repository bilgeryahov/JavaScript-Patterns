"use strict";

const ITalkable         = require('./ITalkable');
const Person            = require('./Person');
const InterfaceManager  = require('./InterfaceManager');

// The interface is not implemented. Will throw an error.
//console.log(Person.sayMyName());
//console.log(Person.sayMyAge());

InterfaceManager.implementInterface(ITalkable, Person);

// The interface is implemented, but the actual method bodies are still not modified.
console.log(Person.sayMyName());
console.log(Person.sayMyAge());

Person.sayMyAge = function () {

    return this.age;
};

Person.sayMyName = function () {

    return this.name;
};

// The interface is implemented, the actual method bodies are modified.
console.log(Person.sayMyName());
console.log(Person.sayMyAge());