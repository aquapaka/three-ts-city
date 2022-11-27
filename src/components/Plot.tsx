import {BoxHelper, Mesh} from "three";
import React, {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {useHelper} from "@react-three/drei";

const Plot = () => {
    const meshRef = useRef<Mesh>(null!);

    useFrame(() => {
        meshRef.current.rotation.z += 0.005;
    })

    useHelper(meshRef, BoxHelper);
    
    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color="green"/>
        </mesh>
    )
}

export default Plot;