import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.input`
  position: absolute;
  background-color: white;
  border-radius: 5px;
  -webkit-appearance: none;
  z-index: 2;
  width: 80%;
  border: 0;
  font-size: 16px;
  padding: 15px 10px;
  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
  margin: auto;
  top: 10px;
  left: 0;
  right: 0;
  height: auto;
`;

interface IProps {
  map: any;
  mapApi: any;
  onInputChange: any;
  onInputBlur: any;
  oriPlace?: {
    lat: number;
    lng: number;
  };
  address: string;
  distance?: number;
  duration?: string;
}

const searchInput: any = React.createRef();
let autoComplete: any = null;

const AutoComplete = ({
  map,
  mapApi,
  onInputChange,
  onInputBlur,
  address,
  oriPlace,
  distance,
  duration
}: IProps) => {
  useEffect(() => {
    autoComplete = new mapApi.places.Autocomplete(searchInput.current);
    autoComplete.addListener("place_changed", onPlaceChanged);
    autoComplete.bindTo("bounds", map);
    // eslint-disable-next-line
  }, []);

  let toMarker: any = null;
  let directionsRenderer: any = null;
  const onPlaceChanged = () => {
    const place = autoComplete.getPlace();
    if (!place.geometry) return;
    if (place.geometry.viewport && oriPlace) {
      if (toMarker) {
        toMarker.setMap(null);
      }
      if (directionsRenderer) {
        directionsRenderer.setMap(null);
      }
      toMarker = new mapApi.Marker({
        position: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        }
      });
      toMarker.setMap(map);
      let bounds = new mapApi.LatLngBounds();
      bounds.extend({ lat: oriPlace.lat, lng: oriPlace.lng });
      bounds.extend({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      });
      map.fitBounds(bounds);
      const start = new mapApi.LatLng(oriPlace.lat, oriPlace.lng);
      const end = new mapApi.LatLng(
        place.geometry.location.lat(),
        place.geometry.location.lng()
      );
      const request = {
        origin: start,
        destination: end,
        travelMode: "TRANSIT"
      };
      const directionsService = new mapApi.DirectionsService();
      directionsRenderer = new mapApi.DirectionsRenderer();
      directionsService.route(request, function(result: any, status: any) {
        console.log(result, status);
        if (status === "OK") {
          const { distance: dis, duration: du } = result.routes[0].legs[0];
          distance = dis.text;
          duration = du.text;
          directionsRenderer.setDirections(result);
          directionsRenderer.setMap(map);
        }
      });
    } else if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }
  };

  return (
    <Container
      ref={searchInput}
      value={address}
      onBlur={onInputBlur}
      onChange={onInputChange}
      placeholder={"Enter a location"}
      name={"address"}
    />
  );
};

export default AutoComplete;
