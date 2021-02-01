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
            console.log("initListeners");
            window.addEventListener("keydown", function (event) {
                switch (event.key) {
                    case "w":
                    case "ArrowUp":
                        console.log("Speed Up");
                        break;
                    case "s":
                    case "ArrowDown":
                        console.log("Speed down");
                        break;
                    case "a":
                    case "ArrowLeft":
                        console.log("jump to left");
                        break;
                    case "d":
                    case "ArrowRight":
                        console.log("jump to Right");
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
