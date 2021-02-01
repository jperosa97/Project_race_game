var RacingGame;
(function (RacingGame) {
    var Player = /** @class */ (function () {
        function Player(pManager) {
            this.manager = pManager;
        }
        Player.prototype.checkCollisions = function () {
        };
        Player.prototype.reset = function () {
        };
        Player.prototype.move = function () {
        };
        Player.prototype.switchLeftRight = function () {
        };
        Player.prototype.changeSpeed = function () {
        };
        Player.prototype.checkFinished = function () {
        };
        return Player;
    }());
    RacingGame.Player = Player;
})(RacingGame || (RacingGame = {}));
