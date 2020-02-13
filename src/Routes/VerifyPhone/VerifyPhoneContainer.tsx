import React, { useState } from "react";
import VerifyPhonePresenter from "./VerifyPhonePresenter";
import { RouteComponentProps } from "react-router-dom";
import axios from "../../api";
import { useMutation } from "@apollo/react-hooks";
import { toast } from "react-toastify";
import { LOG_USER_IN } from "../../sharedQueries";

const VerifyPhoneContainer: React.FC<RouteComponentProps> = props => {
  if (!props.location.state) {
    props.history.push("/phone-login");
  }

  const lState: any = props.location.state;

  interface IState {
    phone: string;
    verificationKey: string;
  }

  const [state, setState] = useState<IState>({
    phone: lState.phone,
    verificationKey: ""
  });

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const {
      target: { value }
    } = event;
    setState({
      ...state,
      verificationKey: value
    });
  };

  const [logUserIn] = useMutation(LOG_USER_IN);

  const onSubmit = async () => {
    const result = await axios.put("/verification/phone", {
      payload: state.phone,
      key: state.verificationKey
    });
    if (result.status === 200) {
      toast.success("인증이 완료되었습니다.");
      logUserIn({
        variables: {
          token: result.data
        }
      });
    }
  };

  return (
    <VerifyPhonePresenter
      onChange={onChange}
      onSubmit={onSubmit}
      verificationKey={state.verificationKey}
    />
  );
};

export default VerifyPhoneContainer;
