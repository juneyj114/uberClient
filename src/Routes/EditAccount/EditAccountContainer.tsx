import React, { useState, useEffect } from "react";
import EditAccountPresenter from "./EditAccountPresenter";
import axios from "../../api";
import { toast } from "react-toastify";

interface IState {
  firstName: string;
  lastName: string;
  email: string;
}

interface User {
  data: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

const EditAccountContainer = () => {
  const [state, setState] = useState<IState>({
    firstName: "",
    lastName: "",
    email: ""
  });

  const getUser = async (): Promise<void> => {
    const {
      data: { firstName, lastName, email }
    }: User = await axios.get("/user");
    setState({
      firstName,
      lastName,
      email
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const res = await axios.put("/user", {
      ...state
    });
    if (res.status === 202) {
      toast.success("Your Account is changed.");
    }
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = event;

    setState({
      ...state,
      [name]: value
    });
  };

  return (
    <EditAccountPresenter
      {...state}
      onSubmit={onSubmit}
      onInputChange={onInputChange}
    />
  );
};

export default EditAccountContainer;
