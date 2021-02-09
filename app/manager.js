/// <reference path="../typings/node_modules/@types/jquery/index.d.ts" />
var RacingGame;
(function (RacingGame) {
    class Manager {
        constructor() {
            this.gameState = GameState.Init;
            this.engine = new RacingGame.Engine(this);
            this.player = new RacingGame.Player(this);
            this.level = new RacingGame.Level(this);
            this.sounds = new RacingGame.Sounds();
            this.initListeners();
        }
        get gameState() {
            return this._gameState;
        }
        set gameState(pNewValue) {
            if (pNewValue === GameState.Start) {
                $(".rankingTable, .rankingInfo").hide();
                $(".menuInfo").show();
                this.sounds.background.stop();
            }
            else if (pNewValue === GameState.Running) {
                $(".rankingTable, .rankingInfo, .menuInfo").hide();
                this.sounds.start.play();
                this.sounds.background.play();
            }
            else if (pNewValue === GameState.Finish) {
                $(".rankingTable, .rankingInfo").show();
                this.sounds.finish.play();
                this.sounds.background.stop();
            }
            this._gameState = pNewValue;
        }
        initListeners() {
            console.log("initListeners");
            window.addEventListener("resize", event => {
                this.engine.resizeEngine();
            });
            window.addEventListener("keydown", event => {
                switch (event.key) {
                    case "w":
                    case "ArrowUp":
                        if (this.gameState === GameState.Running) {
                            this.player.speedChanges = 8;
                        }
                        break;
                    case "s":
                    case "ArrowDown":
                        if (this.gameState === GameState.Running) {
                            this.player.speedChanges = -16;
                        }
                        break;
                    case "a":
                    case "ArrowLeft":
                        console.log("jump to left");
                        this.player.switchLeftRight(-1);
                        break;
                    case "d":
                    case "ArrowRight":
                        console.log("jump to right");
                        this.player.switchLeftRight(1);
                        break;
                    case "r":
                        console.log("reset game");
                        this.player.reset();
                        this.level.reset();
                        this.gameState = GameState.Start;
                        break;
                    case "c":
                        if (this.gameState === GameState.Start) {
                            this.level.createNew();
                        }
                        break;
                    case " ":
                        if (this.gameState === GameState.Start) {
                            console.log("start game");
                            this.gameState = GameState.Running;
                        }
                        break;
                }
            });
            window.addEventListener("keyup", event => {
                switch (event.key) {
                    case "w":
                    case "ArrowUp":
                        if (this.gameState === GameState.Running) {
                            this.player.speedChanges = -1;
                        }
                        break;
                    case "s":
                    case "ArrowDown":
                        if (this.gameState === GameState.Running) {
                            this.player.speedChanges = -1;
                        }
                        break;
                }
            });
        }
    }
    RacingGame.Manager = Manager;
    let GameState;
    (function (GameState) {
        GameState[GameState["Init"] = -1] = "Init";
        GameState[GameState["Start"] = 0] = "Start";
        GameState[GameState["Running"] = 1] = "Running";
        GameState[GameState["Finish"] = 2] = "Finish";
    })(GameState = RacingGame.GameState || (RacingGame.GameState = {}));
})(RacingGame || (RacingGame = {}));
//# sourceMappingURL=manager.js.map