import React, { useState } from "react";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const [state, setState] = useState({
    sidebarOpen: true
  });

  const onSetSidebarOpen = (open: boolean): void => {
    setState({
      sidebarOpen: open
    });
  };
  return (
    <HomePresenter
      sidebarOpen={state.sidebarOpen}
      onSetSidebarOpen={onSetSidebarOpen}
    />
  );
};

export default HomeContainer;
