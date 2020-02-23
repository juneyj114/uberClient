import React, { useState, useEffect } from "react";
import FindAddressPresenter from "./FindAddressPresenter";
import { ClickEventValue } from "google-map-react";
import { reverseGeoCode } from "../../mapHelper";
import { RouteComponentProps } from "react-router-dom";

interface IState {
  place: {
    lat: number;
    lng: number;
    address: string;
  };
  mapApiLoaded: boolean;
  mapInstance: any;
  mapApi: any;
}

const FindAddressContainer = (props: RouteComponentProps) => {
  const [state, setState] = useState<IState>({
    place: {
      lat: 35.15802281693956,
      lng: 129.05917450567784,
      address: ""
    },
    mapApiLoaded: false,
    mapInstance: null,
    mapApi: null
  });

  const onClickFn = async ({ lat, lng }: ClickEventValue) => {
    const address = await reverseGeoCode(`${lat},${lng}`);
    setState({
      ...state,
      place: {
        lat,
        lng,
        address
      }
    });
    const map = state.mapInstance;
    map.setCenter({ lat, lng });
    map.setZoom(18);
  };

  const apiHasLoaded = (map: any, maps: any) => {
    setState({
      ...state,
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps
    });
    map.setCenter({ lat: state.place.lat, lng: state.place.lng });
    map.setZoom(18);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = event;
    setState({
      ...state,
      place: {
        address: state.place.address,
        lng: state.place.lng,
        lat: state.place.lat,
        [name]: value
      }
    });
  };

  const onInputBlur = () => {
    console.log("blur");
  };

  const success: PositionCallback = (position: Position) => {
    setState({
      ...state,
      place: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        address: state.place.address
      }
    });
  };

  const error: PositionErrorCallback = () => {
    console.log("navigator was refused.");
  };

  const onPickPlace = () => {
    const { address, lat, lng } = state.place;
    const { history } = props;
    history.push({
      pathname: "/add-place",
      state: {
        lat,
        lng,
        address
      }
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
    //eslint-disable-next-line
  }, []);

  return (
    <FindAddressPresenter
      {...state}
      onClickFn={onClickFn}
      apiHasLoaded={apiHasLoaded}
      onInputChange={onInputChange}
      onInputBlur={onInputBlur}
      onPickPlace={onPickPlace}
    />
  );
};

export default FindAddressContainer;
