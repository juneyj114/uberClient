import React, { useState } from "react";
import PhoneLoginPresenter from "./PhoneLoginPresenter";
import { toast } from "react-toastify";
import axios from "../../api";
import { RouteComponentProps } from "react-router-dom";

interface State {
  countryCode: string;
  phoneNumber: string;
}

const PhoneLoginContainer: React.FC<RouteComponentProps> = props => {
  const [state, setState] = useState<State>({
    countryCode: "+82",
    phoneNumber: ""
  });

  const history = props.history;

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const {
      target: { name, value }
    } = event;
    console.log(name, value);
    setState({
      ...state,
      [name]: value
    });
  };

  const onSubmit = async () => {
    const phone = `${state.countryCode}${state.phoneNumber}`;
    const isValid = /^\+[1-9]{1}[0-9]{10,12}$/.test(phone);
    if (isValid) {
      const res = await axios.post("/verification/phone", {
        payload: phone
      });
      if (res.data) {
        history.push({
          pathname: "verify-phone",
          state: {
            phone
          }
        });
      } else {
        toast.error("인증키가 발송되지 않았습니다.");
      }
    } else {
      toast.error("전화번호가 유효하지 않습니다.");
    }
  };

  return (
    <PhoneLoginPresenter
      countryCode={state.countryCode}
      phoneNumber={state.phoneNumber}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default PhoneLoginContainer;
