import keyInput from "./assets/KeyInput.js"; // remember the ".js"

/* const myWidth = window.innerWidth;
const myHeight = window.innerHeight;
console.log("screen-width: " + myWidth + "\nscreen-height: " + myHeight); */

const ratio = window.innerWidth / window.innerHeight;
// console.log(ratio);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, ratio, 0.1, 720);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* const light = new THREE.AmbientLight(0x404040);
const dLight = new THREE.DirectionalLight(0xffffff, 0.5);
light.add(dLight);
scene.add(light);
console.log(scene); */

// my surface
const geometry = new THREE.BoxGeometry(50, 0.1, 50);
const material = new THREE.MeshBasicMaterial({ color: 0x660000 });
const ground = new THREE.Mesh(geometry, material);
// const cube = new THREE.Mesh(geometry, material);
scene.add(ground);
camera.position.set(5, 11, 8);
/* scene.add(cube);
camera.position.z = 6; */ // if the value increases, the camera view will be further and further away

// my nft
const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x003300 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);
box.position.set(-2, 1, -5);

// render or animate/infinite loop
function animate() {
    /*     cube.rotation.x += 0.02;
    cube.rotation.y += 0.02; */
    requestAnimationFrame(animate);
    if (keyInput.isPressed(38)) {
        camera.position.y += 0.05;
        camera.position.x += 0.05;
    }
    if (keyInput.isPressed(40)) {
        camera.position.y -= 0.05;
        camera.position.x -= 0.05;
    }
    camera.lookAt(ground.position);
    renderer.render(scene, camera);
}
animate();
