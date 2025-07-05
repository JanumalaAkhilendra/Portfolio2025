import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const EarthModel = () => {
  const ref = useRef();
  const { scene } = useGLTF("/models/unknown_object.glb");

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003; // Slow rotation
    }
  });

  return <primitive ref={ref} object={scene} scale={0.5} />;
};

export default EarthModel;
