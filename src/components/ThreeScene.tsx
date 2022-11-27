import React, {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import {useControls} from "leva";
// Components
import {SmallCityModel} from "./SmallCityModel";
import Plot from "./Plot";
// Types
import CameraController, {CameraType} from "./CameraController";

const ThreeScene = () => {

    const { backgroundColor, ambientLight, directionalLightPos, perspectiveCamera} = useControls({
        backgroundColor: '#6bd5fa',
        ambientLight: { value: 0.1, min: 0, max: 1 },
        directionalLightPos: {
            x: -200,
            y: 200,
            z: 300
        },
        perspectiveCamera: false,
    })

    return (
        <Canvas>
            <CameraController cameraType={perspectiveCamera ? CameraType.PERSPECTIVE_CAMERA : CameraType.ORTHOGRAPHIC_CAMERA}/>

            <directionalLight position={[directionalLightPos.x, directionalLightPos.y, directionalLightPos.z]}/>
            <ambientLight intensity={ambientLight}/>
            <color attach="background" args={[backgroundColor]} />

            {/*<Plot/>*/}
            <Suspense fallback={null}>
                <SmallCityModel position={[45,0,45]}/>
            </Suspense>
        </Canvas>
    );
}

export default ThreeScene;