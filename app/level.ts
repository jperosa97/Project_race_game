namespace RacingGame {
  export class Level {
      manager: Manager;
      dataMap: Array<DataMapRecord> = [];

      constructor(pManager: Manager) {
          this.manager = pManager;
      }

      createNew() {
          
      }

      initDataMap() {
          
      }

      checkCollision() {
          
      }
  }

  export class DataMapRecord {
      x: number;
      z: number;
      collectable: boolean;
      refModel: THREE.Object3D = null;

      constructor(pIsCollectable: boolean, pX: number, pZ: number) {
        this.collectable = pIsCollectable;
        this.x = pX;
        this.z = pZ;
      }
  }
}