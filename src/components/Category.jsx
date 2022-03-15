import React from "react";
import { ListContainer } from "./StyledComps";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { Slink } from "./StyledComps";

const Category = () => {
  return (
    <ListContainer>
      <div className="list">
        <Slink to={"/cuisine/italian"}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </Slink>
        <Slink to={"/cuisine/american"}>
          <FaHamburger />
          <h4>American</h4>
        </Slink>
        <Slink to={"/cuisine/thai"}>
          <GiNoodles />
          <h4>Thai</h4>
        </Slink>
        <Slink to={"/cuisine/japanese"}>
          <GiChopsticks />
          <h4>Japanese</h4>
        </Slink>
      </div>
    </ListContainer>
  );
};

export default Category;
