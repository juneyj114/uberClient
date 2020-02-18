import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../../Component/Header";
import Helmet from "react-helmet";
import Place from "../../Component/Place";
import { ExecutionResult } from "graphql";

const Container = styled.div`
  padding: 0px 40px;
`;

const Image = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;

const GridLink = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 10px;
  margin-bottom: 10px;
`;

const Keys = styled.div``;

const Key = styled.span`
  display: block;
  margin-bottom: 5px;
`;

const FakeLink = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const SLink = styled(Link)`
  display: block;
  text-decoration: underline;
  margin: 20px 0px;
`;

type place = {
  id: number;
  name: string;
  address: string;
  isFav: boolean;
};

interface IProps {
  user: {
    profilePhoto: string;
    fullName: string;
    email: string;
  };
  places: Array<place>;
  loading: boolean;
  logUserOut: () => Promise<ExecutionResult<any>>;
}

const SettingsPresenter = ({ user, places, loading, logUserOut }: IProps) => (
  <React.Fragment>
    <Helmet>
      <title>Settings</title>
    </Helmet>
    <Header title={"Account Settings"} backTo={"/"} />
    {!loading && (
      <Container>
        <GridLink to={"/edit-account"}>
          <React.Fragment>
            <Image src={user.profilePhoto} />
            <Keys>
              <Key>{user.fullName}</Key>
              <Key>{user.email}</Key>
            </Keys>
          </React.Fragment>
        </GridLink>
        {places.map(place => (
          <Place address={place.address} fav={place.isFav} name={place.name} />
        ))}
        <SLink to={"/places"}>Go to Places</SLink>
        <FakeLink onClick={logUserOut}>Log Out</FakeLink>
      </Container>
    )}
  </React.Fragment>
);

export default SettingsPresenter;
