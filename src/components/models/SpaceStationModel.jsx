"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function SpaceStationModel(props) {
  const { scene } = useGLTF("/models/space_station_3_low.glb");
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003; // optional rotation
    }
  });

  return <primitive object={scene} ref={ref} {...props} />;
}
useGLTF.preload("/models/space_station_3_low.glb");