import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { myTheme } from "../../myTheme";
import bgImage from "../../images/bg.png";

const Container = styled.div`
  height: 100vh;
`;

const Header = styled.header`
  height: 70%;
  background: linear-gradient(rgba(0, 153, 196, 0.5), rgba(0, 153, 196, 0.4)),
    url(${bgImage});
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  width: 110px;
  height: 110px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 -14px 28px rgba(0, 0, 0, 0.22);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 25px;
`;

const Title = styled.h1``;

const Footer = styled.div``;

const Subtitle = styled.h2`
  font-size: 30px;
`;

const FakeInput = styled.div`
  margin: 50px 0px;
  font-size: 25px;
  font-weight: 300;
`;

const PhoneLogin = styled.div`
  padding: 20px;
  cursor: pointer;
`;

const Grey = styled.span`
  color: ${props => props.theme.colors.greyColor};
  margin-left: 10px;
`;

const SocialLogin = styled.div`
  border-top: 1px solid ${props => props.theme.colors.greyColor};
  padding: 30px 20px;
  cursor: pointer;
`;

const SocialLink = styled.span`
  color: ${props => props.theme.colors.blueColor};
  font-size: 20px;
`;

const LoginPresenter = () => (
  <Container>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <Header>
      <Logo>
        <Title>Nuber</Title>
      </Logo>
    </Header>
    <Footer>
      <Link to="/phone-login">
        <PhoneLogin>
          <Subtitle>Get moving with Nuber</Subtitle>
          <FakeInput>
            <span role="img" aria-label="kr">
              🇰🇷 +82
            </span>
            <Grey theme={myTheme}>Enter your mobile number</Grey>
          </FakeInput>
        </PhoneLogin>
      </Link>
      <Link to="/social-login">
        <SocialLogin theme={myTheme}>
          <SocialLink theme={myTheme}>Or connect with social</SocialLink>
        </SocialLogin>
      </Link>
    </Footer>
  </Container>
);

export default LoginPresenter;
