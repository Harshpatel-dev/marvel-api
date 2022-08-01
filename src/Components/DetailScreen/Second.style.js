import styled from "styled-components";

export const SecondContainer = styled.div`
  margin: 30px;
  width: 100% - 30px;
  height: 550px;
  background-color: black;
`;

export const Title = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 3rem;
  }
`;

export const CharactersListContainer = styled.div`
  height: 85%;
  /* border: 2px solid white; */
  overflow: hidden;
  display: flex;
  flex-direction: row;
  overflow: auto;
  align-items: center;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CharacterCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 0 0 270px;
  height: 400px;
  margin: 10px 20px;
  background-color: #121212;
  transform: skewX(-8deg);
  transition: transform 0.2s ease-in;

  &:hover {
    transform: skewX(-8deg) translateY(-35px);
  }
`;

export const Image = styled.img`
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;

  width: 100%;
  height: 100%;

  position: relative;

  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%) contrast(120%) brightness(50%);
  &:hover {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
  }

  object-fit: fill;
`;

export const Caption = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0px;
  width: 100%;
  text-align: center;
  transform: skewX(8deg);

  span {
    font-size: 1.5rem;
    text-transform: capitalize;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
  }
`;

// export const Caption = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 50px;

//   span {
//     font-size: 1rem;
//     text-transform: capitalize;
//     font-weight: bold;
//     color: white;
//   }
// `;
