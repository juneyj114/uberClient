import React from "react";
import Sidebar from "react-sidebar";
import Menu from "../../Component/Menu";

interface IProps {
  isMenuOpen: boolean;
  toggleMenu: (open: boolean) => void;
}

const HomePresenter = ({ isMenuOpen, toggleMenu }: IProps) => {
  return (
    <Sidebar
      sidebar={<Menu />}
      open={isMenuOpen}
      onSetOpen={toggleMenu}
      styles={{ sidebar: { background: "white", width: "80%", zIndex: "10" } }}
    >
      <button onClick={() => toggleMenu(true)}>Open sidebar</button>
    </Sidebar>
  );
};

export default HomePresenter;
