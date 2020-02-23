import React from "react";
import Sidebar from "react-sidebar";
import Menu from "../../Component/Menu";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import AutoComplete from "../../Component/AutoComplete/Index";

interface IProps {
  isMenuOpen: boolean;
  toggleMenu: (open: boolean) => void;
  place: {
    lat: number;
    lng: number;
    address: string;
  };
  apiHasLoaded: (map: any, maps: any) => void;
  mapApiLoaded: boolean;
  mapInstance: any;
  mapApi: any;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onInputBlur: () => void;
  distance: number;
  duration: string;
}

interface MProps {
  lat: number;
  lng: number;
  text: string;
}

const Container = styled.div`
  font-size: 20px;
`;

const Marker = ({ text }: MProps) => <Container>{text}</Container>;

const HomePresenter = ({
  isMenuOpen,
  toggleMenu,
  place,
  apiHasLoaded,
  mapApiLoaded,
  mapInstance,
  mapApi,
  onInputChange,
  onInputBlur,
  distance,
  duration
}: IProps) => {
  return (
    <Sidebar
      sidebar={<Menu />}
      open={isMenuOpen}
      onSetOpen={toggleMenu}
      styles={{ sidebar: { background: "white", width: "80%", zIndex: "10" } }}
    >
      <button onClick={() => toggleMenu(true)}>|||</button>
      <div style={{ height: "100vh", width: "100%" }}>
        {mapApiLoaded && (
          <AutoComplete
            map={mapInstance}
            mapApi={mapApi}
            onInputChange={onInputChange}
            onInputBlur={onInputBlur}
            address={place.address}
            oriPlace={place}
            distance={distance}
            duration={duration}
          ></AutoComplete>
        )}
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDyrhysIUpb0N506bRHvo2fFSLG4uJC_DU" }}
          defaultCenter={place}
          defaultZoom={16}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => {
            apiHasLoaded(map, maps);
          }}
        >
          <Marker lat={place.lat} lng={place.lng} text="🔵"></Marker>
        </GoogleMapReact>
      </div>
    </Sidebar>
  );
};

export default HomePresenter;
