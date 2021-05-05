import React, { useState } from "react";
import NavBar from "../navbar/index";

import Sidebar from "../Sidebar";
import {
  CorpoContainer,
  CorpoContent,
  CorpoItems,
  CorpoH1,
  CorpoP,
  CorpoBtn,
} from "./corpoElements";

const Corpo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <CorpoContainer>
        <NavBar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <CorpoContent>
          <CorpoItems>
            <CorpoH1>Adote seu Husky</CorpoH1>
            <CorpoP>Entregas em 45 dias após o nascimento</CorpoP>
            <CorpoBtn>Adote</CorpoBtn>
          </CorpoItems>
        </CorpoContent>
      </CorpoContainer>
    </div>
  );
};

export default Corpo;
