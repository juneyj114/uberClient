import React from "react";
import styled from "styled-components";
import Input from "../../Component/Input";
import { Helmet } from "react-helmet";
import Header from "../../Component/Header";
import Button from "../../Component/Button";

const Container = styled.div``;

const Form = styled.form`
  padding: 0px 40px;
`;

const ExtendedInput = styled(Input)`
  margin-bottom: 20px;
`;

const VerifyPhonePresenter = () => (
  <Container>
    <Helmet>
      <title>Verify Phone</title>
    </Helmet>
    <Header backTo={"/phone-login"} title={"Verify Phone Number"} />
    <Form>
      <ExtendedInput
        value={""}
        placeholder={"Enter Verification Code"}
        onChange={() => {}}
      />
      <Button value={"Submit"} onClick={null} />
    </Form>
  </Container>
);

export default VerifyPhonePresenter;
