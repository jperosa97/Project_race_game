/// <reference path="../typings/node_modules/@types/jquery/index.d.ts" />
var RacingGame;
(function (RacingGame) {
    class Player {
        constructor(pManager) {
            this.manager = pManager;
            this.reset();
        }
        reset() {
            this.points = 0;
            this.speed = 0;
            this.speedChanges = 0;
            if (this.refPlayerModel !== undefined) {
                this.refPlayerModel.position.set(0, 0, 0);
                this.manager.engine.cameraGroup.position.z = 0;
            }
        }
        move(pDeltaSec) {
            if (this.speedChanges !== 0) {
                this.speed += (this.speedChanges * pDeltaSec);
                if (this.speed <= 0) {
                    this.speed = 0;
                    this.speedChanges = 0;
                }
            }
            this.manager.engine.cameraGroup.position.z = this.refPlayerModel.position.z -= (this.speed * pDeltaSec);
            this.manager.level.checkCollision(this.refPlayerModel.position, 10);
            $("#speedData").html("" + Math.floor(this.speed));
            $("#scoreData").html("" + Math.floor(this.points));
            this.checkFinished();
        }
        switchLeftRight(pSwitchValue) {
            if (pSwitchValue < 0 && this.refPlayerModel.position.x >= 0) {
                this.refPlayerModel.position.x -= 6;
                this.manager.sounds.changeDirection.play();
            }
            else if (pSwitchValue > 0 && this.refPlayerModel.position.x <= 0) {
                this.refPlayerModel.position.x += 6;
                this.manager.sounds.changeDirection.play();
            }
        }
        checkFinished() {
            if (this.refPlayerModel.position.z < -1110 && this.manager.gameState == RacingGame.GameState.Running) {
                this.manager.gameState = RacingGame.GameState.Finish;
                this.speedChanges = -200;
            }
        }
    }
    RacingGame.Player = Player;
})(RacingGame || (RacingGame = {}));
//# sourceMappingURL=player.js.map