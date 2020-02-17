import React, { useState } from "react";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const [state, setState] = useState({
    isMenuOpen: false
  });

  const toggleMenu = (open: boolean): void => {
    setState({
      isMenuOpen: open
    });
  };
  return (
    <HomePresenter isMenuOpen={state.isMenuOpen} toggleMenu={toggleMenu} />
  );
};

export default HomeContainer;
