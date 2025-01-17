import React from "react";
import styled from "styled-components";
import { myTheme } from "../../myTheme";

const Place = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: center;
  & i {
    font-size: 12px;
  }
`;

const Container = styled.div`
  margin-left: 10px;
`;

const Name = styled.span`
  display: block;
`;

const Icon = styled.span`
  cursor: pointer;
`;

const Address = styled.span`
  color: ${props => props.theme.colors.greyColor};
  font-size: 14px;
`;

interface IProps {
  fav: boolean;
  name: string;
  address: string;
  onStarPress: () => Promise<void>;
}

const PlacePresenter = ({ fav, name, address, onStarPress }: IProps) => (
  <Place>
    <Icon onClick={onStarPress}>{fav ? "★" : "✩"}</Icon>
    <Container>
      <Name>{name}</Name>
      <Address theme={myTheme}>{address}</Address>
    </Container>
  </Place>
);

export default PlacePresenter;
