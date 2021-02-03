var RacingGame;
(function (RacingGame) {
    var Player = /** @class */ (function () {
        function Player(pManager) {
            this.manager = pManager;
            this.reset();
        }
        Player.prototype.checkCollisions = function () {
        };
        Player.prototype.reset = function () {
            this.points = 0;
            this.speed = 0;
            this.speedChanges = 0;
        };
        Player.prototype.move = function (pDeltaSec) {
            if (this.speedChanges !== 0) {
                this.speed += (this.speedChanges * pDeltaSec);
                if (this.speed <= 0) {
                    this.speed = 0;
                    this.speedChanges = 0;
                }
            }
            this.refPlayerModel.position.z -= (this.speed * pDeltaSec);
            $("#speedData").html("" + Math.floor(this.speed));
        };
        Player.prototype.switchLeftRight = function (pSwitchValue) {
            if (pSwitchValue < 0 && this.refPlayerModel.position.x >= 0) {
                this.refPlayerModel.position.x -= 6;
            }
            else if (pSwitchValue > 0 && this.refPlayerModel.position.x <= 0) {
                this.refPlayerModel.position.x += 6;
            }
        };
        Player.prototype.changeSpeed = function () {
        };
        Player.prototype.checkFinished = function () {
        };
        return Player;
    }());
    RacingGame.Player = Player;
})(RacingGame || (RacingGame = {}));
