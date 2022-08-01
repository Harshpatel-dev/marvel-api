import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import titleFonts from "../../fonts/title.ttf";
import unionFonts from "../../fonts/unionFonts/uniongray3dsemital.ttf";
import robotoFonts from "../../fonts/robotoFonts/Roboto-Regular.ttf";
// @import url('http://fonts.cdnfonts.com/css/union-gray');

export const GlobalStyles = createGlobalStyle`
  
  @font-face {
    font-family: wasted;
    font-style: bold;
    font-weight: 800;
    src: url(${titleFonts});
  }

  @font-face {
    font-family: union;
    font-style: bold;
    font-weight: 800;
    src: url(${unionFonts});
  }

  @font-face {
    font-family: roboto;
    src: url(${robotoFonts});
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const FirstContainer = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
  width: 100% - 30px;
  height: 85vh;
  display: flex;
  background-color: black;
  justify-content: space-between;
`;

export const DescContainer = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 100%;
  padding: 0px 30px;
  flex-direction: column;
  justify-content: center;

  p:first-child {
    font-family: union;
    font-size: 90px;
    /* letter-spacing: 5px; */
  }

  p:nth-child(2) {
    margin: 5px;
    font-family: roboto;
    word-spacing: 2px;
    color: gray;
    /* font-size: 100px; */
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;

export const Shadow = styled.div`
  top: 0px;
  left: 0px;
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: inset 70px 0px 65px -1px black;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  position: relative;
`;
