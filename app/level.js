var RacingGame;
(function (RacingGame) {
    var Level = /** @class */ (function () {
        function Level(pManager) {
            this.dataMap = [];
            this.manager = pManager;
        }
        Level.prototype.createNew = function () {
        };
        Level.prototype.initDataMap = function () {
        };
        Level.prototype.checkCollision = function () {
        };
        return Level;
    }());
    RacingGame.Level = Level;
    var DataMapRecord = /** @class */ (function () {
        function DataMapRecord(pIsCollectable, pX, pZ) {
            this.refModel = null;
            this.collectable = pIsCollectable;
            this.x = pX;
            this.z = pZ;
        }
        return DataMapRecord;
    }());
    RacingGame.DataMapRecord = DataMapRecord;
})(RacingGame || (RacingGame = {}));
