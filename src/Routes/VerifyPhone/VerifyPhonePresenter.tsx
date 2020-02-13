import React from "react";
import styled from "styled-components";
import Input from "../../Component/Input";
import { Helmet } from "react-helmet";
import Header from "../../Component/Header";
import Button from "../../Component/Button";
import Form from "../../Component/Form";

const Container = styled.div``;

const ExtendForm = styled(Form)`
  padding: 0px 40px;
`;

const ExtendedInput = styled(Input)`
  margin-bottom: 20px;
`;

interface IProps {
  onChange: React.ChangeEventHandler;
  onSubmit: any;
  verificationKey: string;
}

const VerifyPhonePresenter = ({
  onChange,
  verificationKey,
  onSubmit
}: IProps) => (
  <Container>
    <Helmet>
      <title>Verify Phone</title>
    </Helmet>
    <Header backTo={"/phone-login"} title={"Verify Phone Number"} />
    <ExtendForm submitFn={onSubmit}>
      <ExtendedInput
        value={verificationKey}
        placeholder={"Enter Verification Code"}
        onChange={onChange}
      />
      <Button value={"Submit"} onClick={onSubmit} />
    </ExtendForm>
  </Container>
);

export default VerifyPhonePresenter;
