const ObserverManager = require("./ObserverManager.js");
const Observer = require("./Observer.js");

const FakeAuthController = (function () {

    const Logic = {

        _myObserverManager: {},

        init(){

            const self = this;
            self._myObserverManager = new ObserverManager();
            self._myObserverManager.clearObservers();
        },

        getMyObserverManager(){

            const self = this;
            return self._myObserverManager;
        },

        sendAnUpdate(update){

            const self = this;
            self._myObserverManager.updateObservers(update);
        }
    };

    return{

        init(){

            Logic.init();
        },

        getMyObserverManager(){

            return Logic.getMyObserverManager();
        },

        sendAnUpdate(update){

            Logic.sendAnUpdate(update);
        }
    }
})();

const FakeLoginController = (function () {

    const Logic = {

        _myObserver: {},

        init(){

            const self = this;

            if(!FakeAuthController){

                console.log("FakeLoginController.init(): FakeAuthController is missing!");
                return;
            }

            self._myObserver = new Observer();
            self._myObserver.getUpdate = function (update) {

                console.log("FakeLoginController says " + update);
            };

            FakeAuthController.getMyObserverManager().addObserver(self._myObserver);
        }
    };

    return {

        init(){

            Logic.init();
        }
    }
})();

const FakeAdministrationController = (function () {

    const Logic = {

        _myObserver: {},

        init(){

            const self = this;

            if(!FakeAuthController){

                console.log("FakeAdministrationController.init(): FakeAuthController is missing!");
                return;
            }

            self._myObserver = new Observer();
            self._myObserver.getUpdate = function (update) {

                console.log("FakeAdministrationController says " + update);
            };

            FakeAuthController.getMyObserverManager().addObserver(self._myObserver);
        }
    };

    return {

        init(){

            Logic.init();
        }
    }
})();

FakeAuthController.init();
FakeLoginController.init();
FakeAdministrationController.init();
FakeAuthController.sendAnUpdate("User has just logged in!");