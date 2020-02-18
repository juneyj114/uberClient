import React, { useState, useEffect } from "react";
import EditAccountPresenter from "./EditAccountPresenter";
import axios from "../../api";
import axiosOri from "axios";
import { toast } from "react-toastify";

interface IState {
  firstName: string;
  lastName: string;
  email: string;
  profilePhoto: string;
  uploading: boolean;
}

interface User {
  data: {
    firstName: string;
    lastName: string;
    email: string;
    profilePhoto: string;
  };
}

const EditAccountContainer = () => {
  const [state, setState] = useState<IState>({
    firstName: "",
    lastName: "",
    email: "",
    profilePhoto: "",
    uploading: false
  });

  const getUser = async (): Promise<void> => {
    const {
      data: { firstName, lastName, email, profilePhoto }
    }: User = await axios.get("/user");
    setState({
      firstName,
      lastName,
      email,
      profilePhoto,
      uploading: false
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

  const onInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value, files }
    } = event;

    if (files) {
      setState({
        ...state,
        uploading: true
      });
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("upload_preset", "jqsimj4h");
      const {
        data: { url }
      } = await axiosOri.post(
        "https://api.cloudinary.com/v1_1/dy3tu4j6h/upload",
        formData
      );

      if (url) {
        console.log(url);
        setState({
          ...state,
          profilePhoto: url,
          uploading: false
        });
        console.log(state);
      }
    } else {
      setState({
        ...state,
        [name]: value
      });
    }
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
