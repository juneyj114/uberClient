import React from "react";
import styled from "styled-components";
import { myTheme } from "../../myTheme";

const Container = styled.input`
  border: none;
  border-bottom: 2px solid ${props => props.theme.colors.greyColor};
  font-size: 20px;
  width: 100%;
  padding-bottom: 10px;
  font-weight: 500;
  transition: border-bottom 0.1s linear;
  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px white inset !important;
  }
  &:focus {
    border-bottom-color: #2c3e50;
    outline: none;
  }
  &::placeholder {
    color: ${props => props.theme.colors.greyColor};
    font-weight: 300;
  }
`;

interface IProps {
  placeholder?: string;
  type?: string;
  required?: boolean;
  value: any;
  name?: string;
  onChange?: React.ChangeEventHandler;
  className?: string;
}

const Input = ({
  placeholder = "",
  type = "text",
  required = true,
  value,
  name,
  onChange,
  className
}: IProps) => (
  <Container
    placeholder={placeholder}
    type={type}
    required={required}
    value={value}
    name={name}
    onChange={onChange}
    className={className}
    theme={myTheme}
  />
);

export default Input;
