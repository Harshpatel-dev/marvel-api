import styled from "styled-components";

export const CardGrid = styled.div`
  background-color: #121212;
  display: flex;
  flex-flow: row wrap;
  width: 100vw;
  height: 90vh;
  overflow: auto;
  justify-content: space-between;
  position: relative;
  opacity: ${(props) => (props.changeOpacity ? 0.1 : 1)};
`;

export const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
