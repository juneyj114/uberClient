import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import countries from "../../countries";
import Input from "../../Component/Input";
import BackArrow from "../../Component/BackArrow";
import Form from "../../Component/Form";

const Container = styled.div`
  margin-top: 30px;
  padding: 50px 20px;
`;

const BackArrowExtended = styled(BackArrow)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Title = styled.h2`
  font-size: 25px;
  margin-bottom: 40px;
`;

const CountrySelect = styled.select`
  font-size: 20px;
  color: "#2c3e50";
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: white;
  border: 0;
  font-family: "Maven Pro";
  margin-bottom: 20px;
  width: 90%;
`;

const CountryOption = styled.option``;

const ExtendForm = styled(Form)``;

const Button = styled.button`
  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
`;

interface IProps {
  countryCode: string;
  phoneNumber: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const PhoneLoginPresenter = ({
  countryCode,
  phoneNumber,
  onChange,
  onSubmit
}: IProps) => (
  <Container>
    <Helmet>
      <title>Phone Login</title>
    </Helmet>
    <BackArrowExtended backTo={"/"} />
    <Title>Enter your mobile number</Title>
    <CountrySelect value={countryCode} name={"countryCode"} onChange={onChange}>
      {countries.map((country, index) => (
        <CountryOption key={index} value={country.dial_code}>
          {country.flag} {country.name} {country.dial_code}
        </CountryOption>
      ))}
    </CountrySelect>
    <ExtendForm submitFn={onSubmit}>
      <Input
        placeholder={"010 1234 5678"}
        value={phoneNumber}
        name={"phoneNumber"}
        onChange={onChange}
      />
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={"white"}
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </Button>
    </ExtendForm>
  </Container>
);

export default PhoneLoginPresenter;
