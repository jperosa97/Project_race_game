var RacingGame;
(function (RacingGame) {
    var Engine = /** @class */ (function () {
        function Engine(pManager) {
            this.manager = pManager;
            this.initEngineAnd3DModels();
            console.log("Engine created");
        }
        Engine.prototype.initEngineAnd3DModels = function () {
        };
        Engine.prototype.resizeEngine = function () {
        };
        Engine.prototype.startRenderLoop = function () {
        };
        Engine.prototype.stopRenderLoop = function () {
        };
        Engine.prototype.render = function () {
        };
        return Engine;
    }());
    RacingGame.Engine = Engine;
})(RacingGame || (RacingGame = {}));
