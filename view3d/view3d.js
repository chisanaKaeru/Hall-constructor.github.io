function main() {
  const canvas = document.querySelector('#view_3d');
  const renderer = new THREE.WebGLRenderer({canvas});
  let pathMTL = '/view3d/МАСТ_2211_001_Пульсатор/МАСТ_2211_001_Пульсатор.mtl';
  let pathOBJ = '/view3d/МАСТ_2211_001_Пульсатор/МАСТ.2211.001 Пульсатор.obj';
  const fov = 50;
  const aspect = 2;
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 20);

  const controls = new THREE.OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#404040');

  {
    const color = 0xFFFFFF;
    const intensity = 0.5;
    const light = new THREE.AmbientLight(color, intensity);
    scene.add(light);
  }

  function lightCamera (intensityLight, pos1, pos2, pos3){
    const color = 0xFFFFFF;
    const intensity = intensityLight;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(pos1, pos2, pos3);
    scene.add(light);
  }
  lightCamera(0.5, 0, -50, 0);
  lightCamera(0.5, 0, 50, 0);
  lightCamera(0.5, 0, 0, 50);
  lightCamera(0.5, 0, 0, -50);
  lightCamera(0.5, 50, 0, 0);
  lightCamera(0.5, -50, 0, 0);

  function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.Math.degToRad(camera.fov * .5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
    const direction = (new THREE.Vector3())
        .subVectors(camera.position, boxCenter)
        .multiply(new THREE.Vector3(1, 0, 1))
        .normalize();
    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;
    camera.updateProjectionMatrix();
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  }

  {
    const objLoader = new THREE.OBJLoader2();
    objLoader.loadMtl(pathMTL, null, (materials) => {
      objLoader.setMaterials(materials);
      objLoader.load(pathOBJ, (event) => {
        const root = event.detail.loaderRootNode;
        scene.add(root);
        const box = new THREE.Box3().setFromObject(root);
        const boxSize = box.getSize(new THREE.Vector3()).length();
        const boxCenter = box.getCenter(new THREE.Vector3());
        frameArea(boxSize * 1.5, boxSize, boxCenter, camera);
        controls.maxDistance = boxSize * 10;
        controls.target.copy(boxCenter);
        controls.update();
      });
    });
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render() {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
main();