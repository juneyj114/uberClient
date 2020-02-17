import React, { useState, useEffect } from "react";
import MenuPresenter from "./MenuPresenter";
import axios from "../../api";

interface IState {
  user: {
    profilePhoto: string;
    fullName: string;
    isDriving: boolean;
  };
  loading: boolean;
}

const MenuContainer = () => {
  const [state, setState] = useState<IState>({
    user: {
      profilePhoto: "",
      fullName: "",
      isDriving: false
    },
    loading: true
  });

  const getUserMenu = async () => {
    const user = await axios.get("/user");
    setState({
      user: {
        profilePhoto: user.data.profilePhoto,
        fullName: user.data.fullName,
        isDriving: user.data.driving
      },
      loading: false
    });
  };

  const toggleDriveMode = async () => {
    const res = await axios.put("/driveMode");
    if (res.status === 202) {
      setState({
        ...state,
        user: {
          isDriving: !state.user.isDriving,
          fullName: state.user.fullName,
          profilePhoto: state.user.profilePhoto
        }
      });
    }
  };

  useEffect(() => {
    getUserMenu();
  }, []);

  return (
    <MenuPresenter
      user={state.user}
      loading={state.loading}
      toggleDriveMode={toggleDriveMode}
    />
  );
};

export default MenuContainer;
