import React from "react";
import GoogleMapReact, { ClickEventValue } from "google-map-react";
import styled from "styled-components";

const Marker = styled.div`
  font-size: 24px;
`;

interface IProps {
  text: string;
  lat: number;
  lng: number;
}

interface PIProps {
  lat: number;
  lng: number;
  onClickFn: (value: ClickEventValue) => void;
}

const AnyReactComponent = ({ text }: IProps) => <Marker>{text}</Marker>;

const FindAddressPresenter = ({ lat, lng, onClickFn }: PIProps) => (
  <div style={{ height: "100vh", width: "100%" }}>
    <GoogleMapReact
      onClick={onClickFn}
      bootstrapURLKeys={{ key: "AIzaSyDyrhysIUpb0N506bRHvo2fFSLG4uJC_DU" }}
      defaultCenter={{ lat, lng }}
      defaultZoom={16}
    >
      <AnyReactComponent lat={lat} lng={lng} text="📌" />
    </GoogleMapReact>
  </div>
);

export default FindAddressPresenter;
