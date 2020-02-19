import React, { useState } from "react";
import FindAddressPresenter from "./FindAddressPresenter";
import { ClickEventValue } from "google-map-react";

interface IState {
  lat: number;
  lng: number;
}

const FindAddressContainer = () => {
  const [state, setState] = useState<IState>({
    lat: 35.15802281693956,
    lng: 129.05917450567784
  });

  const onClickFn = ({ lat, lng }: ClickEventValue) => {
    setState({
      lat,
      lng
    });
    console.log(lat, lng);
  };

  return <FindAddressPresenter {...state} onClickFn={onClickFn} />;
};

export default FindAddressContainer;
