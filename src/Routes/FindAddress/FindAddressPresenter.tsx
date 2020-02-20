import React from "react";
import GoogleMapReact, { ClickEventValue } from "google-map-react";
import styled from "styled-components";
import AutoComplete from "../../Component/AutoComplete/Index";

const Marker = styled.div`
  font-size: 24px;
`;

interface IProps {
  text: string;
  lat: number;
  lng: number;
}

interface PIProps {
  place: {
    lat: number;
    lng: number;
  };
  onClickFn: (value: ClickEventValue) => void;
  apiHasLoaded: (map: any, maps: any) => void;
  mapApiLoaded: boolean;
  mapInstance: any;
  mapApi: any;
}

const AnyReactComponent = ({ text }: IProps) => <Marker>{text}</Marker>;

const FindAddressPresenter = ({
  place,
  onClickFn,
  apiHasLoaded,
  mapApiLoaded,
  mapInstance,
  mapApi
}: PIProps) => (
  <div style={{ height: "100vh", width: "100%" }}>
    {mapApiLoaded && (
      <AutoComplete map={mapInstance} mapApi={mapApi}></AutoComplete>
    )}

    <GoogleMapReact
      onClick={onClickFn}
      bootstrapURLKeys={{ key: "AIzaSyDyrhysIUpb0N506bRHvo2fFSLG4uJC_DU" }}
      defaultCenter={{ lat: place.lat, lng: place.lng }}
      defaultZoom={16}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => {
        apiHasLoaded(map, maps);
      }}
    >
      <AnyReactComponent lat={place.lat} lng={place.lng} text="📌" />
    </GoogleMapReact>
  </div>
);

export default FindAddressPresenter;
