import React, { useState, useEffect } from "react";
import SettingsPresenter from "./SettingsPresenter";
import axios from "../../api";
import { useMutation } from "@apollo/react-hooks";
import { LOG_USER_OUT } from "../../sharedQueries";

const SettingsContainer = () => {
  const [state, setState] = useState({
    user: {
      profilePhoto: "",
      email: "",
      fullName: ""
    },
    places: [],
    loading: true
  });

  const getSettings = async () => {
    const { data } = await axios.get("/user");
    const { data: places } = await axios.get("/place");
    setState({
      user: {
        profilePhoto: data.profilePhoto,
        email: data.email,
        fullName: data.fullName
      },
      places: places,
      loading: false
    });
  };

  useEffect(() => {
    getSettings();
  }, []);

  const [logUserOut] = useMutation(LOG_USER_OUT);
  return <SettingsPresenter {...state} logUserOut={logUserOut} />;
};

export default SettingsContainer;
