'use client'

import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { Canvas, ThreeElements, useFrame } from '@react-three/fiber';
import { extend } from '@react-three/fiber';
import Box from '@/components/box';
import { OrbitControls } from '@react-three/drei';

const MyCanvas = () => {
	return (
		<Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={new THREE.Vector3(-1.2,0,0)} />
      <Box position={new THREE.Vector3(1.2,0,0)} />
      <OrbitControls />
    </Canvas>
	);
}

export default MyCanvas;
