/// <reference path="../typings/node_modules/@types/jquery/index.d.ts" />

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
            this.player.speedChanges = 8;
            break;

            case "s":
            case "ArrowDown":
            console.log("Speed down");
            this.player.speedChanges = -20;
            break;

            case "a":
            case "ArrowLeft":
            console.log("jump to left");
            this.player.switchLeftRight(-1);
            break;
              
            case "d":
            case "ArrowRight":
            console.log("jump to Right");
            this.player.switchLeftRight(1);
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
        window.addEventListener("keyup", event => {
          switch (event.key) {
            
            case "w":
            case "ArrowUp":
            console.log("Speed Up");
            this.player.speedChanges = -5;
            break;

            case "s":
            case "ArrowDown":
            console.log("Speed down");
            this.player.speedChanges = -5;
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
