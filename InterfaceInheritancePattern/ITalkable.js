"use strict";

/**
 * Interface, which exposes two functions.
 *
 * @type {{sayMyName: (()), sayMyAge: (())}}
 */

const ITalkable = {

    sayMyName(){

        return 'Not implemented';
    },

    sayMyAge(){

        return -1;
    }
};

module.exports = ITalkable;