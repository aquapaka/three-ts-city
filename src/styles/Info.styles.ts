import styled from "styled-components";

export const TopLeftWrapper = styled.div`
  position: absolute;
  top: 1vw;
  left: 1vw;
  z-index: 1;
  
  h1 {
    margin: 0;
  }
`;

export const BottomRightWrapper = styled.div`
  position: absolute;
  bottom: 1vw;
  right: 1vw;
  z-index: 1;
  
  span {
    margin-left: 10px;
  }
`;