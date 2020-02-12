import React, { useEffect } from "react";
import VerifyPhonePresenter from "./VerifyPhonePresenter";
import { useLocation, RouteComponentProps } from "react-router-dom";

const VerifyPhoneContainer: React.FC<RouteComponentProps> = props => {
  if (!props.location.state) {
    props.history.push("/phone-login");
  }
  console.log(props.location);
  return <VerifyPhonePresenter />;
};

export default VerifyPhoneContainer;
