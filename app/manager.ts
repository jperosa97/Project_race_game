namespace RacingGame {
  export class Manager {
      engine: Engine;
      player: Player;
      level: Level;
      sounds: Sounds;

      private _gameState: GameState;

      constructor() {
          this.gameState = GameState.Init;
          this.engine = new Engine(this);
          this.player = new Player(this);
          this.level = new Level(this);
          this.sounds = new Sounds();
          this.initListeners();
      }

      get gameState(): GameState {
        return this._gameState;
      }

      set gameState(pNewValue: GameState) {
        this._gameState = pNewValue;
      }

      private initListeners() {
        console.log("initListeners");
        window.addEventListener("keydown", event => {
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
        })
      }
  }

  export enum GameState {
    Init = -1,
    Start = 0,
    Running = 1,
    Finish = 2
  }  
}

//tsc *.ts --watch / um die Typescript Datei automatisch komplimiere zu JS
