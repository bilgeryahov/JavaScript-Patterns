"use strict";

const Observer = require("./Observer.js");


/**
 * @class ObserverManager
 * 
 * Class used for creating manager entities of observer entities.
 */

module.exports = class ObserverManager{

    /**
     * Construct an ObserverManager.
     *
     * @return void
     */

    constructor(){

        this.observers = [];
    }

    /**
     * Clear the list of observers.
     *
     * @return void
     */

    clearObservers(){

        this.observers = [];
    }

    /**
     * Add a new observer.
     *
     * @param observer
     *
     * @return void
     */

    addObserver(observer){

        if(observer instanceof Observer){

            this.observers.push(observer);
        }
    }

    /**
     * Get a particular observer from the specified index.
     *
     * @param index
     *
     * @return Observer|null
     */

    getObserverAt(index){

        if(this.observers[index] !== undefined){

            return this.observers[index];
        }

        return null;
    }

    /**
     * Get a specific observer based on name.
     *
     * @param observer
     *
     * @return Observer|null
     */

    getObserver(observer){

        if(observer instanceof Observer === false){

            return null;
        }

        this.observers.forEach(function(item){

            if(item === observer){

                return item;
            }
        });

        return null;
    }

    /**
     * Remove a specific observer from that location.
     *
     * @param index
     *
     * @return {boolean}
     */

    removeObserverAt(index){

        if(this.observers[index]){

            this.observers.splice(index, 1);
            return true;
        }

        return false;
    }

    /**
     * Update all the observers for a specific event.
     *
     * @param update
     *
     * @return void
     */

    updateObservers(update){

        this.observers.forEach(function(observer){

            observer.getUpdate(update);
        });
    }
};