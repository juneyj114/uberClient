import React from "react";
import Sidebar from "react-sidebar";
import Menu from "../../Component/Menu";

interface IProps {
  sidebarOpen: boolean;
  onSetSidebarOpen: (open: boolean) => void;
}

const HomePresenter = ({ sidebarOpen, onSetSidebarOpen }: IProps) => {
  return (
    <Sidebar
      sidebar={<Menu />}
      open={sidebarOpen}
      onSetOpen={onSetSidebarOpen}
      styles={{ sidebar: { background: "white", width: "80%", zIndex: "10" } }}
    >
      <button onClick={() => onSetSidebarOpen(true)}>Open sidebar</button>
    </Sidebar>
  );
};

export default HomePresenter;
