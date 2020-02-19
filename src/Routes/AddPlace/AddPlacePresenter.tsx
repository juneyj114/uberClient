import React from "react";
import styled from "styled-components";
import Input from "../../Component/Input";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Header from "../../Component/Header";
import Form from "../../Component/Form";
import Button from "../../Component/Button";

const Container = styled.div`
  padding: 0 40px;
`;

const ExtendedInput = styled(Input)`
  margin-bottom: 40px;
`;

const ExtendedLink = styled(Link)`
  text-decoration: underline;
  margin-bottom: 20px;
  display: block;
`;

interface IProps {
  name: string;
  address: string;
  loading: boolean;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: any;
}

const AddPlacePresenter = ({
  name,
  address,
  loading,
  onInputChange,
  onSubmit
}: IProps) => (
  <React.Fragment>
    <Helmet>
      <title>Place</title>
    </Helmet>
    <Header title={"Add Place"} backTo={"/"}></Header>
    <Container>
      <Form submitFn={onSubmit}>
        <ExtendedInput
          value={name}
          placeholder={"name"}
          name={"name"}
          onChange={onInputChange}
        />
        <ExtendedInput
          value={address}
          placeholder={"address"}
          name={"address"}
          onChange={onInputChange}
        />
        <ExtendedLink to={"/find-address"}>Pick place from map</ExtendedLink>
        <Button
          onClick={onSubmit}
          value={loading ? "Adding place..." : "Add place"}
        ></Button>
      </Form>
    </Container>
  </React.Fragment>
);

export default AddPlacePresenter;
