import { Canvas } from "@react-three/fiber";
import { Woman } from "./components/Woman";
import { Interface } from "./components/Interface";
import { CameraControls } from "./components/CameraControls";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Interface />
      <Canvas shadows camera={{ position: [-1.5, 2.5, 5], fov: 75, near: 0.1 }}>
        <CameraControls />
        <ambientLight />
        <directionalLight
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <group position={[0, -1, 0]}>
          <Woman />
        </group>
        <mesh
          rotation={[-0.5 * Math.PI, 0, 0]}
          position={[0, -1, 0]}
          receiveShadow
        >
          <planeBufferGeometry args={[10, 10, 1, 1]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
