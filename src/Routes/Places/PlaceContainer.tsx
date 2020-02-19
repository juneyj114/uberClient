import React, { useState, useEffect } from "react";
import PlacePresenter from "./PlacePresenter";
import axios from "../../api";

interface IState {
  places: Array<any>;
  loading: boolean;
}

const PlaceContainer = () => {
  const [state, setState] = useState<IState>({
    places: [],
    loading: false
  });

  const getPlace = async () => {
    setState({
      places: [],
      loading: true
    });
    const { data: places } = await axios.get("/place");
    setState({
      places,
      loading: false
    });
  };

  useEffect(() => {
    getPlace();
  }, []);

  return <PlacePresenter {...state} />;
};

export default PlaceContainer;
