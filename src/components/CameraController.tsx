import {OrbitControls, OrthographicCamera, PerspectiveCamera, PointerLockControls} from "@react-three/drei";
import React from "react";

export enum CameraControllerType {
    MAP_VIEW_CAMERA,
    FIRST_PERSON_CAMERA
}

type Props = {
    cameraControllerType: CameraControllerType
}

const CameraController: React.FC<Props> = ({cameraControllerType}) => {

    return (
        <>
            <OrthographicCamera makeDefault={cameraControllerType === CameraControllerType.MAP_VIEW_CAMERA} position={[100, 50, 100]} near={0.1} far={1000} zoom={80}/>
            <OrbitControls/>
        </>
    )
}

export default CameraController;