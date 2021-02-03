namespace RacingGame {
  export class Engine {
      manager: Manager;
      scene: THREE.Scene;
      camera: THREE.PerspectiveCamera;
      cameraGroup: THREE.Group;
      renderer: THREE.WebGLRenderer;
      renderClock: THREE.Clock;

      constructor(pManager: Manager) {
          this.manager = pManager;
          this.initEngineAnd3DModels();
          console.log("Engine created");
      }

      private initEngineAnd3DModels() {
          this.scene = new THREE.Scene();
          this.cameraGroup = new THREE.Group();
          this.camera = new THREE.PerspectiveCamera(
            70, 
            window.innerWidth / window.innerHeight, 
            0.1, 
            2000
          );
          this.camera.position.set(0, 8, 18);
          this.camera.lookAt(0, 0, 0);
          this.cameraGroup.add(this.camera);
          this.scene.add(this.cameraGroup);

          let lightD1 = new THREE.DirectionalLight(0xffffff, 3);
          lightD1.position.set(0, 10,5);
          this.scene.add(lightD1);

          let skyboxLoader = new THREE.CubeTextureLoader();
          this.scene.background = skyboxLoader.load([
              "media/skybox/night_px.jpg",
              "media/skybox/night_nx.jpg",
              "media/skybox/night_py.jpg",
              "media/skybox/night_ny.jpg",
              "media/skybox/night_pz.jpg",
              "media/skybox/night_nz.jpg"
          ]);


          this.renderer = new THREE.WebGLRenderer({antialias: true});
          this.resizeEngine();
          document.body.appendChild(this.renderer.domElement);

          let loader = new THREE.ObjectLoader();
          loader.load("media/models/models_combined.json", 
          (obj:any) => {
            console.log(" data loadet....");
            this.scene.add(obj);
            this.manager.player.refPlayerModel = this.scene.getObjectByName("car");
            this.startRenderLoop();
          },
          (data:any) => {
            console.log("Loading data....");
          }, 
          (err:any) => {
            console.log("error happend during load-process-....");
          }
          );

          this.renderClock = new THREE.Clock();
        }

      resizeEngine() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);

      }
      startRenderLoop() {
        if(!this.renderClock.running) {
          this.renderClock.start();
          this.render();
        }
      }
      stopRenderLoop() {
        this.renderClock.stop();
      }
      render = () => {
        if(this.renderClock.running) {
          requestAnimationFrame(this.render);
        }
        this.manager.player.move(this.renderClock.getDelta());
        this.renderer.render(this.scene, this.camera);
      }
     
  }
}