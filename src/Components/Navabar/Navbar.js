import React, { useState } from "react";
import {
  Nav,
  Logo,
  SearchBar,
  InputField,
  SearchIc,
  Menu,
  MenuDiv,
  MenuLink,
  Hamburger,
} from "./navbar.style";
import SearchIcon from "@mui/icons-material/Search";
import { border } from "@mui/system";
import { yellow } from "@mui/material/colors";

function Navbar() {
  const [isFocused, setisFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onFocus = () => setisFocused(true);
  const onBlur = () => setisFocused(false);

  return (
    <Nav>
      <Logo>MARVEL</Logo>
      <SearchBar isFocused={isFocused}>
        <InputField
          type="text"
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="Search By Comics name...."
        ></InputField>
        <SearchIc>
          <SearchIcon style={styles.searchIcon} />
        </SearchIc>
      </SearchBar>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuDiv isOpen={isOpen}>
          <MenuLink href="">Our Work</MenuLink>
        </MenuDiv>
        <MenuDiv isOpen={isOpen}>
          <MenuLink href="">About</MenuLink>
        </MenuDiv>
        <MenuDiv isOpen={isOpen}>
          <MenuLink href="">Carrers</MenuLink>
        </MenuDiv>
        <MenuDiv isOpen={isOpen} notContain={true}>
          <MenuLink href="">Contact</MenuLink>
        </MenuDiv>
      </Menu>
    </Nav>
  );
}

const styles = {
  searchIcon: {
    fontSize: "30px",
  },
};

export default Navbar;
