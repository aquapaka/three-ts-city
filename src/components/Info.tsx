import React from "react";

import {TopLeftWrapper, BottomRightWrapper} from "../styles/Info.styles";

const TopLeftInfo = () => {
    return (
        <TopLeftWrapper>
            <h1>Low Poly City</h1>
        </TopLeftWrapper>
    )
}

const BottomRightInfo = () => {
    return (
        <BottomRightWrapper>
            <span>Model author: <a href="https://sketchfab.com/antonmoek" target="_blank">antonmoek</a></span>
            <span>License: <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank">CC-BY-4.0</a></span>
        </BottomRightWrapper>
    )
}

const Info = () => {
    return (
        <>
            <TopLeftInfo/>
            <BottomRightInfo/>
        </>
    )
}

export default Info;