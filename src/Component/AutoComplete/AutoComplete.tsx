import React, { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

interface IProps {
  map: any;
  mapApi: any;
}

const AutoComplete = ({ map, mapApi }: IProps) => {
  const searchInput = useRef<HTMLInputElement>(null);

  const onPlaceChanged = () => {
    const place = autoComplete.getPlace();

    if (!place.geometry) return;
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }
  };

  const autoComplete = new mapApi.places.Autocomplete(searchInput, {});
  autoComplete.addListener("place_changed", onPlaceChanged);
  console.log(map);
  autoComplete.bindTo("bounds", map);

  const clearSearchBox = () => {
    console.log(searchInput.current?.value);
  };
  return (
    <Wrapper>
      <input
        ref={searchInput}
        type="text"
        onFocus={clearSearchBox}
        placeholder="Enter a location"
      />
    </Wrapper>
  );
};

export default AutoComplete;
