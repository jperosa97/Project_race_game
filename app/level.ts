namespace RacingGame {
  export class Level {
      manager: Manager;
      dataMap: Array<DataMapRecord> = [];

      collectableModel: THREE.Object3D;
      barrierModel: THREE.Object3D;

      constructor(pManager: Manager) {
          this.manager = pManager;
      }

      createNew() {
          this.collectableModel.visible = false;
          this.barrierModel.visible = false;

          for (let i = 0; i < this.dataMap.length; i++) {
            this.manager.engine.scene.remove(this.dataMap[i].refModel);
          }
          this.dataMap = [];

          for (let zVal = -10; zVal > -1100; zVal-= 20) {
            let xtempArr = [-6, 0, 6];
            let xVal = xtempArr[Math.floor(Math.random() * 3)];

            let isCollectable: boolean = (Math.round(Math.random()) === 0) ? true : false;

            this.dataMap.push(new DataMapRecord(isCollectable, xVal, zVal));

            let newCloneObj: THREE.Object3D;
            if (isCollectable) {
              newCloneObj = this.collectableModel.clone();
            }
            else {
              newCloneObj = this.barrierModel.clone();
            }
            newCloneObj.position.z = zVal;
            newCloneObj.position.x = xVal;
            newCloneObj.visible = true;

            this.manager.engine.scene.add(newCloneObj);
            this.dataMap[this.dataMap.length-1].refModel = newCloneObj;
          }
      }

      initDataMap() {
          
      }

      checkCollision(pPlayerPos: THREE.Vector3, pPlayerLength) {
        for (let i = 0; i < this.dataMap.length; i++) {
          let tempData = this.dataMap[i];
          if (tempData.refModel.visible) {
            if (tempData.z > pPlayerPos.z &&
                tempData.z < (pPlayerPos.z + pPlayerLength) &&
                tempData.x === pPlayerPos.x) {
                  tempData.refModel.visible = false;
                  if (tempData.collectable) {
                    this.manager.player.points += Math.floor(this.manager.player.speed);
                    this.manager.sounds.collect.play();
                  }
                  else {
                    this.manager.player.speed /= 2;
                    this.manager.sounds.error.play();
                  }
            }
          }
        }
      }

      reset() {
        for (let i = 0; i < this.dataMap.length; i++) {
          this.dataMap[i].refModel.visible = true;
        }
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