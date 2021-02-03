var RacingGame;
(function (RacingGame) {
    var Engine = /** @class */ (function () {
        function Engine(pManager) {
            var _this = this;
            this.render = function () {
                if (_this.renderClock.running) {
                    requestAnimationFrame(_this.render);
                }
                _this.manager.player.move(_this.renderClock.getDelta());
                _this.renderer.render(_this.scene, _this.camera);
            };
            this.manager = pManager;
            this.initEngineAnd3DModels();
            console.log("Engine created");
        }
        Engine.prototype.initEngineAnd3DModels = function () {
            var _this = this;
            this.scene = new THREE.Scene();
            this.cameraGroup = new THREE.Group();
            this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 2000);
            this.camera.position.set(0, 8, 18);
            this.camera.lookAt(0, 0, 0);
            this.cameraGroup.add(this.camera);
            this.scene.add(this.cameraGroup);
            var lightD1 = new THREE.DirectionalLight(0xffffff, 3);
            lightD1.position.set(0, 10, 5);
            this.scene.add(lightD1);
            var skyboxLoader = new THREE.CubeTextureLoader();
            this.scene.background = skyboxLoader.load([
                "media/skybox/night_px.jpg",
                "media/skybox/night_nx.jpg",
                "media/skybox/night_py.jpg",
                "media/skybox/night_ny.jpg",
                "media/skybox/night_pz.jpg",
                "media/skybox/night_nz.jpg"
            ]);
            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            this.resizeEngine();
            document.body.appendChild(this.renderer.domElement);
            var loader = new THREE.ObjectLoader();
            loader.load("media/models/models_combined.json", function (obj) {
                console.log(" data loadet....");
                _this.scene.add(obj);
                _this.manager.player.refPlayerModel = _this.scene.getObjectByName("car");
                _this.startRenderLoop();
            }, function (data) {
                console.log("Loading data....");
            }, function (err) {
                console.log("error happend during load-process-....");
            });
            this.renderClock = new THREE.Clock();
        };
        Engine.prototype.resizeEngine = function () {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        };
        Engine.prototype.startRenderLoop = function () {
            if (!this.renderClock.running) {
                this.renderClock.start();
                this.render();
            }
        };
        Engine.prototype.stopRenderLoop = function () {
            this.renderClock.stop();
        };
        return Engine;
    }());
    RacingGame.Engine = Engine;
})(RacingGame || (RacingGame = {}));
