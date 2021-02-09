var RacingGame;
(function (RacingGame) {
    class Level {
        constructor(pManager) {
            this.dataMap = [];
            this.manager = pManager;
        }
        createNew() {
            this.collectableModel.visible = false;
            this.barrierModel.visible = false;
            for (let i = 0; i < this.dataMap.length; i++) {
                this.manager.engine.scene.remove(this.dataMap[i].refModel);
            }
            this.dataMap = [];
            for (let zVal = -10; zVal > -1100; zVal -= 20) {
                let xtempArr = [-6, 0, 6];
                let xVal = xtempArr[Math.floor(Math.random() * 3)];
                let isCollectable = (Math.round(Math.random()) === 0) ? true : false;
                this.dataMap.push(new DataMapRecord(isCollectable, xVal, zVal));
                let newCloneObj;
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
                this.dataMap[this.dataMap.length - 1].refModel = newCloneObj;
            }
        }
        initDataMap() {
        }
        checkCollision(pPlayerPos, pPlayerLength) {
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
    RacingGame.Level = Level;
    class DataMapRecord {
        constructor(pIsCollectable, pX, pZ) {
            this.refModel = null;
            this.collectable = pIsCollectable;
            this.x = pX;
            this.z = pZ;
        }
    }
    RacingGame.DataMapRecord = DataMapRecord;
})(RacingGame || (RacingGame = {}));
//# sourceMappingURL=level.js.map