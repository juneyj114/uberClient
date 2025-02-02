import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Form from "../../Component/Form";
import Input from "../../Component/Input";
import Header from "../../Component/Header";
import Button from "../../Component/Button";
import PhotoInput from "../../Component/PhotoInput";

const Container = styled.div``;

const ExtendedForm = styled(Form)`
  padding: 0px 40px;
`;

const ExtendedInput = styled(Input)`
  margin-bottom: 30px;
`;

interface IProps {
  firstName: string;
  lastName: string;
  email: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  profilePhoto: string;
  uploading: boolean;
}

const EditAccountPresenter = ({
  firstName,
  lastName,
  email,
  onSubmit,
  onInputChange,
  profilePhoto,
  uploading
}: IProps) => (
  <Container>
    <Helmet>
      <title>Edit Account</title>
    </Helmet>
    <Header title={"Edit Account"} backTo={"/"}></Header>
    <ExtendedForm submitFn={onSubmit}>
      <PhotoInput
        fileUrl={profilePhoto}
        uploading={uploading}
        onChange={onInputChange}
      />
      <ExtendedInput
        onChange={onInputChange}
        value={firstName}
        placeholder={"First name"}
        name={"firstName"}
      />
      <ExtendedInput
        onChange={onInputChange}
        value={lastName}
        placeholder={"Last name"}
        name={"lastName"}
      />
      <ExtendedInput
        onChange={onInputChange}
        value={email}
        placeholder={"Email"}
        name={"email"}
        type={email}
      />
      <Button onClick={onSubmit} value={"Update"}></Button>
    </ExtendedForm>
  </Container>
);

export default EditAccountPresenter;
