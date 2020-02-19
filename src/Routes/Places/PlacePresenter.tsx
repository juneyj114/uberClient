import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Header from "../../Component/Header";
import Place from "../../Component/Place";

const Container = styled.div`
  padding: 0 40px;
`;

const SLink = styled(Link)`
  text-decoration: underline;
`;

type place = {
  id: number;
  isFav: boolean;
  name: string;
  address: string;
};

interface IProps {
  loading: boolean;
  places: Array<place>;
}

const PlacePresenter = ({ loading, places }: IProps) => (
  <React.Fragment>
    <Helmet>
      <title>Places</title>
    </Helmet>
    <Header title={"Places"} backTo={"/"}></Header>
    <Container>
      {!loading && places.length === 0 && "You have no place"}
      {!loading &&
        places.length >= 1 &&
        places.map(place => (
          <Place
            address={place.address}
            fav={place.isFav}
            name={place.name}
            key={place.id}
            id={place.id}
          ></Place>
        ))}
      <SLink to={"/add-place"}>Add some places!</SLink>
    </Container>
  </React.Fragment>
);

export default PlacePresenter;
