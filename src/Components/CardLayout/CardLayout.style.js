import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 300px;
  height: 400px;
  margin: 1.2rem;
  -moz-perspective: 200rem;
  perspective: 200rem;
  transition: all 0.6s ease-in;
  border-radius: 1rem;
  box-shadow: 5px 2px 11px 2px rgba(0, 0, 0, 0.3);
  background-color: black;
`;

export const SubCon = styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  &:hover div:first-child {
    transform: ${(props) =>
      props.isDesciptionAvail ? "rotateY(-180deg)" : ""};
  }

  &:hover div:last-child {
    transform: ${(props) => (props.isDesciptionAvail ? "rotateY(0deg)" : "")};
  }
`;

export const Card_Front__Part = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 1s ease;
  /* overflow: hidden; */

  border-radius: 1rem 1rem 0rem 0rem;

  -webkit-backface-visibility: hidden; /* We don't want to see the back part of the element. */
  backface-visibility: hidden; /* We don't want to see the back part of the element. */
`;

export const Card_Back__Part = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 1s ease;
  transform: rotateY(180deg);
  border-radius: 1rem 1rem 0rem 0rem;
  padding: 1rem;

  /* background-color: #101010; */
  background-color: black;

  p:first-child {
    font-weight: 800;
    font-size: 2rem;
    text-align: center;
  }

  p:nth-child(2) {
    color: white;
    font-size: 1rem;
  }

  -webkit-backface-visibility: hidden; /* We don't want to see the back part of the element. */
  backface-visibility: hidden; /* We don't want to see the back part of the element. */
`;

export const MoreDetails = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  border-radius: 0rem 0rem 1rem 1rem;
  background-color: #101010;
  background-color: black;
  cursor: pointer;

  span {
    text-decoration: none;
    font-size: medium;
    font-weight: 500;
  }
`;

export const Image = styled.img`
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;

  position: relative;
  width: 100%;
  height: 300px;
  object-fit: fill;
`;

export const Caption = styled.div`
  /* background-color: white; */
  overflow: hidden;
  height: calc(100% - 300px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -4px;

  & > * {
    padding: 0.9rem 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.2rem; */

  span {
    font-size: 1rem;
    text-transform: capitalize;
    font-weight: bold;
    color: white;
  }
  small {
    font-size: 12px;
    color: white;
  }
`;

/* &:hover {
    transform: scale(1.1);
    box-shadow: 8px 5px 6px 2px rgba(0, 0, 0, 0.1);
  } */
