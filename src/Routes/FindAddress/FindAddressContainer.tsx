import React, { useState } from "react";
import FindAddressPresenter from "./FindAddressPresenter";
import { ClickEventValue } from "google-map-react";

interface IState {
  place: {
    lat: number;
    lng: number;
  };
  mapApiLoaded: boolean;
  mapInstance: any;
  mapApi: any;
}

const FindAddressContainer = () => {
  const [state, setState] = useState<IState>({
    place: {
      lat: 35.15802281693956,
      lng: 129.05917450567784
    },
    mapApiLoaded: false,
    mapInstance: null,
    mapApi: null
  });

  const onClickFn = ({ lat, lng }: ClickEventValue) => {
    setState({
      ...state,
      place: {
        lat,
        lng
      }
    });
  };

  const apiHasLoaded = (map: any, maps: any) => {
    setState({
      ...state,
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps
    });
  };

  return (
    <FindAddressPresenter
      {...state}
      onClickFn={onClickFn}
      apiHasLoaded={apiHasLoaded}
    />
  );
};

export default FindAddressContainer;
