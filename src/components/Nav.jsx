import React from "react";
import { GiForkKnifeSpoon, GiKnifeFork } from "react-icons/gi";
import { NavLogo, Logo } from "./StyledComps";

const Nav = () => {
  return (
    <NavLogo to={"/"}>
      <GiKnifeFork />
      <p> delica</p>
    </NavLogo>
  );
};

export default Nav;
