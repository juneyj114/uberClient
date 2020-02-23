import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";

interface IState {
  isMenuOpen: boolean;
  place: {
    lat: number;
    lng: number;
    address: string;
  };
  mapApiLoaded: boolean;
  mapInstance: any;
  mapApi: any;
  distance: number;
  duration: string;
}

const HomeContainer = () => {
  const [state, setState] = useState<IState>({
    isMenuOpen: false,
    place: {
      lat: 35.15802281693956,
      lng: 129.05917450567784,
      address: ""
    },
    mapApiLoaded: false,
    mapInstance: null,
    mapApi: null,
    distance: 0,
    duration: ""
  });

  const toggleMenu = (open: boolean): void => {
    setState({
      ...state,
      isMenuOpen: open
    });
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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
    //eslint-disable-next-line
  }, []);

  const handleGeoWatchSuccess = (position: Position) => {
    const map = state.mapInstance;
    if (!map) {
      return;
    }
    setState({
      ...state,
      place: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        address: state.place.address
      }
    });
    map.setCenter({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    });
    map.setZoom(18);
    return;
  };
  const handleGeoWatchError = () => {
    console.log("Error watching you");
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

  navigator.geolocation.getCurrentPosition(
    handleGeoWatchSuccess,
    handleGeoWatchError,
    {
      enableHighAccuracy: true
    }
  );

  return (
    <HomePresenter
      isMenuOpen={state.isMenuOpen}
      toggleMenu={toggleMenu}
      apiHasLoaded={apiHasLoaded}
      onInputChange={onInputChange}
      onInputBlur={onInputBlur}
      {...state}
    />
  );
};

export default HomeContainer;
