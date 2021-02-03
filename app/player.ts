namespace RacingGame {
  export class Player {
      manager: Manager;
      points: number;
      speed: number;
      speedChanges: number;
      lane: number;
      refPlayerModel: THREE.Object3D;

      constructor(pManager: Manager) {
          this.manager = pManager;
          this.reset();
      }

      private checkCollisions() {
          
      }

      reset() {
          this.points = 0;
          this.speed = 0;
          this.speedChanges = 0;
      }

      move(pDeltaSec: number) {
        if (this.speedChanges !== 0) {
          this.speed += (this.speedChanges * pDeltaSec);
          if(this.speed <= 0) {
            this.speed = 0;
            this.speedChanges = 0;
          }
        }
        this.refPlayerModel.position.z -= (this.speed * pDeltaSec);
        $("#speedData").html(""+Math.floor(this.speed));

      }

      switchLeftRight(pSwitchValue: number) {
          if (pSwitchValue < 0 && this.refPlayerModel.position.x >= 0) {
            this.refPlayerModel.position.x -= 6;
          }
          else if (pSwitchValue > 0 && this.refPlayerModel.position.x <= 0) {
            this.refPlayerModel.position.x += 6;
          }
      }

      changeSpeed() {
          
      }

      checkFinished() {
          
      }
  }
}