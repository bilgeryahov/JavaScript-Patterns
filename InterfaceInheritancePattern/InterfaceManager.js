'use strict';

const InterfaceManager = {

    /**
     * Function that will do the actual interface implementation.
     *
     * @param theInterface
     * @param theObject
     *
     * @return void
     */

    implementInterface(theInterface, theObject) {

        for(let member in theInterface){

            if(theInterface.hasOwnProperty(member)){

                theObject[member] = theInterface[member];
            }
        }
    }
};

module.exports = InterfaceManager;