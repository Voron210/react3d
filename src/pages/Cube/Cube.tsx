import { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const fov = 75;
const aspect = 1.5;
const near = 0.1;
const far = 5;

const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;

const textColorMap = new Map<string, string>([
  ["Сторона 1", "#4DA9C2"],
  ["Сторона 2", "#00A86B"],
  ["Сторона 3", "#A496BE"],
  ["Сторона 4", "#D6ADCC"],
  ["Сторона 5", "#D19C7C"],
  ["Сторона 6", "#E37E5E"],
]);

const createTextTexture = (text: string, color: string) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d")!;
  const size = 512;
  canvas.width = size;
  canvas.height = size;

  context.fillStyle = color;
  context.fillRect(0, 0, size, size);

  context.fillStyle = "#000000";
  context.font = "bold 48px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, size / 2, size / 2);

  return new THREE.CanvasTexture(canvas);
};

interface props {
  setData: React.Dispatch<React.SetStateAction<any>>;
}

const Cube: FC<props> = ({ setData }) => {
  const renderer = useRef<THREE.WebGLRenderer | null>(null);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const canvas = document.getElementById("c") as HTMLCanvasElement;

    if (!renderer.current) {
      renderer.current = new THREE.WebGLRenderer({ canvas });
    }

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    const controls = new OrbitControls(camera, renderer.current.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const updateParentSize = () => {
      if (containerRef.current && renderer.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        renderer.current.setSize(width, height);
      }
    };

    updateParentSize();
    window.addEventListener("resize", updateParentSize);

    function onDoubleClick(event: MouseEvent) {
      const rect = renderer.current!.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(scene.children);
      if (intersects.length > 0) {
        const sideIndex = Math.floor(intersects[0].face!.materialIndex);
        const sideText = Array.from(textColorMap.keys())[sideIndex];
        const newData = {
          id: sideIndex,
          UUID: `${intersects[0].object.uuid}`,
          text: `${sideText}`,
          top: event.clientY - rect.top,
          left: event.clientX - rect.left,
        };

        localStorage.setItem("cubeData", JSON.stringify(newData));
        setData(newData);
        navigate(`/side/:${sideIndex}`);
      }
    }

    window.addEventListener("dblclick", onDoubleClick);

    renderer.current.setClearColor(0x000000, 0);

    const materials: THREE.MeshBasicMaterial[] = [];

    textColorMap.forEach((color, text) => {
      materials.push(
        new THREE.MeshBasicMaterial({ map: createTextTexture(text, color) })
      );
    });

    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const cube = new THREE.Mesh(geometry, materials);

    scene.add(cube);
    camera.position.z = 2;

    function render(time: number) {
      time *= 0.0002;

      cube.rotation.x = time;
      cube.rotation.y = time;

      const canvas = renderer.current!.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();

      renderer.current!.render(scene, camera);

      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", updateParentSize);
    };
  }, []);

  return (
    <div className="three" ref={containerRef}>
      <canvas id="c" />
    </div>
  );
};

export default Cube;
