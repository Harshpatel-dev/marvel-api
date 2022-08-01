import styled from "styled-components";

export const Nav = styled.div`
  padding: 0px 16px;
  align-content: center;
  flex-basis: 100vw;
  flex-grow: 0;
  height: 10vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  position: sticky;
  top: 0;
  /* background-color: #222831; */
  background-color: #101010;
  box-shadow: 0px 25px 10px -15px black, 0px -20px 10px -15px black;
  z-index: 1;
  box-sizing: border-box;
`;

export const Logo = styled.div`
  font-weight: 800;
  font-size: 2.5rem;
  color: khaki ;

  span {
    font-size: 1.8rem;
    font-weight: 300;
  }

  @media (max-width: 600px) {
    order: 1;
  }

  @media (max-width: 320px) {
    order: 1;
    font-size: 2rem;

    span {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 320px) {
    order: 1;
    font-size: 1.5rem;

    span {
      font-size: 0.8rem;
    }
  }
`;

export const SearchBar = styled.div`
  display: flex;
  border: ${(props) =>
    props.isFocused ? "2px solid white" : " 1px solid lightgray"};
  width: 30vw;
  height: 2rem;
  border-radius: 2px;

  &:active {
    box-shadow: 0px 4px 20px 0px rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 1000px) {
    order: 4;
    flex: 0 100vw;
    margin: auto;
    margin-top: 0.7rem;
  }
`;

export const InputField = styled.input`
  width: 90%;
  border: none;
  outline: none;
  font-size: 1.2rem;
  padding-left: 5px;
  color: black;
`;

export const SearchIc = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 5px;
    text-decoration: none;
  }

  @media (max-width: 600px) {
    order: 2;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MenuDiv = styled.div`
  padding: 1rem 1rem;
  @media (max-width: 768px) {
    border-bottom: ${(props) =>
      props.isOpen && !props?.notContain ? "2px solid white" : "0px"};
    width: 100%;
    text-align: center;
    transition: all 0.5s ease-in-out;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100vw;
    order: 3;
    max-height: ${(props) => (props.isOpen ? "300px" : "0px")};
    transition: max-height 0.3s ease-in;
  }
`;

export const MenuLink = styled.a`
  /* padding: 1rem 2rem; */
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  /* color: #67bc98; */
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    /* color: #7b7fda; */
  }
`;
