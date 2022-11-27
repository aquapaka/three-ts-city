import React, {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import {useControls} from "leva";
// Components
import {SmallCityModel} from "./SmallCityModel";
import Plot from "./Plot";
// Types
import CameraController, {CameraControllerType} from "./CameraController";

const ThreeScene = () => {

    const { backgroundColor, ambientLight, directionalLightPos, firstPersonCamera} = useControls({
        backgroundColor: '#6bd5fa',
        ambientLight: { value: 0.1, min: 0, max: 1 },
        directionalLightPos: {
            x: -200,
            y: 200,
            z: 300
        },
        firstPersonCamera: false,
    })

    return (
        <Canvas>
            <CameraController cameraControllerType={firstPersonCamera ? CameraControllerType.FIRST_PERSON_CAMERA : CameraControllerType.MAP_VIEW_CAMERA}/>

            <directionalLight position={[directionalLightPos.x, directionalLightPos.y, directionalLightPos.z]}/>
            <ambientLight intensity={ambientLight}/>
            <color attach="background" args={[backgroundColor]} />

            <Suspense fallback={null}>
                <SmallCityModel position={[-20,0,40]}/>
            </Suspense>
        </Canvas>
    );
}

export default ThreeScene;