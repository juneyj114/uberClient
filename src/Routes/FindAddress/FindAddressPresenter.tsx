import React from "react";
import GoogleMapReact, { ClickEventValue } from "google-map-react";
import styled from "styled-components";
import AutoComplete from "../../Component/AutoComplete/Index";
import Button from "../../Component/Button";

const Marker = styled.div`
  font-size: 24px;
`;

const ExtendedButton = styled(Button)`
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 10;
  height: auto;
  width: 80%;
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
    address: string;
  };
  onClickFn: (value: ClickEventValue) => void;
  apiHasLoaded: (map: any, maps: any) => void;
  mapApiLoaded: boolean;
  mapInstance: any;
  mapApi: any;
  onInputChange: any;
  onInputBlur: any;
  onPickPlace: () => void;
}

const AnyReactComponent = ({ text }: IProps) => <Marker>{text}</Marker>;

const FindAddressPresenter = ({
  place,
  onClickFn,
  apiHasLoaded,
  mapApiLoaded,
  mapInstance,
  mapApi,
  onInputChange,
  onInputBlur,
  onPickPlace
}: PIProps) => (
  <div style={{ height: "100vh", width: "100%" }}>
    {mapApiLoaded && (
      <AutoComplete
        map={mapInstance}
        mapApi={mapApi}
        onInputChange={onInputChange}
        onInputBlur={onInputBlur}
        address={place.address}
      ></AutoComplete>
    )}

    <GoogleMapReact
      onClick={onClickFn}
      bootstrapURLKeys={{ key: "AIzaSyDyrhysIUpb0N506bRHvo2fFSLG4uJC_DU" }}
      defaultCenter={place}
      defaultZoom={16}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => {
        apiHasLoaded(map, maps);
      }}
    >
      <AnyReactComponent lat={place.lat} lng={place.lng} text="📌" />
    </GoogleMapReact>
    <ExtendedButton onClick={onPickPlace} value={"Pick this place"} />
  </div>
);

export default FindAddressPresenter;
