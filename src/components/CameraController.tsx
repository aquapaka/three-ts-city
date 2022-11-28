import {
    OrbitControls,
    OrthographicCamera,
    PerspectiveCamera,
} from "@react-three/drei";
import React from "react";

export enum CameraType {
    ORTHOGRAPHIC_CAMERA,
    PERSPECTIVE_CAMERA
}

type Props = {
    cameraType: CameraType
}

const CameraController: React.FC<Props> = ({cameraType}) => {

    return (
        <>
            <OrthographicCamera makeDefault={cameraType === CameraType.ORTHOGRAPHIC_CAMERA} position={[200, 100, 200]} near={0} far={1000} zoom={4}/>
            <PerspectiveCamera makeDefault={cameraType === CameraType.PERSPECTIVE_CAMERA} position={[200, 100, 200]} near={1} far={1000} fov={50}/>
            <OrbitControls />
        </>
    )
}

export default CameraController;