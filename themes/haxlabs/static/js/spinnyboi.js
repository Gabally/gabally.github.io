import * as THREE from 'three';
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";

const computerCanvas = document.getElementById("computer");

let scene =  new THREE.Scene();
scene.background = null;

const mtlLoader = new MTLLoader();

let computerModel = null;

mtlLoader.load("models/computer.mtl", (mtl) => {
    mtl.preload();
    const loader = new OBJLoader();
    loader.setMaterials(mtl);
    loader.load(
      "models/computer.obj",
    (object) => {
        scene.add(object);
        computerModel = object;
        object.position.setZ(25);
         object.rotation.x = 0.5;
        requestAnimationFrame(animate);
      },
      function () {},
      function (error) {
        console.error("An error occoured while loading the model");
        console.error(error);
      }
    );
});


let camera = new THREE.PerspectiveCamera(
    75,
    computerCanvas.width / computerCanvas.height,
    0.1,
    1000
);
  
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(6,20,60);
scene.add(pointLight);

let renderer = new THREE.WebGLRenderer({
    canvas: computerCanvas,
    alpha: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( 300, 300);
camera.position.setZ(30);

let lastTimestamp = 0;

let animate = (time) => {
    requestAnimationFrame(animate);
    let deltaTime = (time - lastTimestamp) / 1000;
    computerModel.rotation.y += deltaTime;
    renderer.render(scene, camera);
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    lastTimestamp = time;
};