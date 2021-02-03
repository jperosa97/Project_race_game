/// <reference path="../typings/node_modules/@types/jquery/index.d.ts" />
var RacingGame;
(function (RacingGame) {
    var Manager = /** @class */ (function () {
        function Manager() {
            this.gameState = GameState.Init;
            this.engine = new RacingGame.Engine(this);
            this.player = new RacingGame.Player(this);
            this.level = new RacingGame.Level(this);
            this.sounds = new RacingGame.Sounds();
            this.initListeners();
        }
        Object.defineProperty(Manager.prototype, "gameState", {
            get: function () {
                return this._gameState;
            },
            set: function (pNewValue) {
                this._gameState = pNewValue;
            },
            enumerable: false,
            configurable: true
        });
        Manager.prototype.initListeners = function () {
            var _this = this;
            console.log("initListeners");
            window.addEventListener("keydown", function (event) {
                switch (event.key) {
                    case "w":
                    case "ArrowUp":
                        console.log("Speed Up");
                        _this.player.speedChanges = 8;
                        break;
                    case "s":
                    case "ArrowDown":
                        console.log("Speed down");
                        _this.player.speedChanges = -20;
                        break;
                    case "a":
                    case "ArrowLeft":
                        console.log("jump to left");
                        _this.player.switchLeftRight(-1);
                        break;
                    case "d":
                    case "ArrowRight":
                        console.log("jump to Right");
                        _this.player.switchLeftRight(1);
                        break;
                    case "r":
                    case "ArrowReset":
                        console.log("Speed Reset");
                        break;
                    case " ":
                        console.log("start game");
                        break;
                }
            });
            window.addEventListener("keyup", function (event) {
                switch (event.key) {
                    case "w":
                    case "ArrowUp":
                        console.log("Speed Up");
                        _this.player.speedChanges = -5;
                        break;
                    case "s":
                    case "ArrowDown":
                        console.log("Speed down");
                        _this.player.speedChanges = -5;
                        break;
                }
            });
        };
        return Manager;
    }());
    RacingGame.Manager = Manager;
    var GameState;
    (function (GameState) {
        GameState[GameState["Init"] = -1] = "Init";
        GameState[GameState["Start"] = 0] = "Start";
        GameState[GameState["Running"] = 1] = "Running";
        GameState[GameState["Finish"] = 2] = "Finish";
    })(GameState = RacingGame.GameState || (RacingGame.GameState = {}));
})(RacingGame || (RacingGame = {}));
//tsc *.ts --watch / um die Typescript Datei automatisch komplimiere zu JS
