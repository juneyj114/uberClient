import React, { useState } from "react";
import AddPlacePresenter from "./AddPlacePresenter";
import axios from "../../api";
import { toast } from "react-toastify";
import { RouteComponentProps } from "react-router-dom";

interface IState {
  name: string;
  address: string;
  lat: number;
  lng: number;
  isFav: boolean;
  loading: boolean;
}

const AddPlaceContainer: React.FC<RouteComponentProps> = props => {
  const { state: lState }: any = props.location;
  const [state, setState] = useState<IState>({
    name: "",
    address: lState?.address || "",
    lat: lState?.lat || 0,
    lng: lState?.lng || 0,
    isFav: false,
    loading: false
  });

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = event;

    setState({
      ...state,
      [name]: value
    });
  };

  const onSubmit = async () => {
    const res = await axios.post("/place", state);
    if (res.status === 202) {
      toast.success("Saved the place.");
      setTimeout(() => props.history.push("/places"), 2000);
    } else {
      toast.error("error");
    }
  };

  return (
    <AddPlacePresenter
      {...state}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
    />
  );
};

export default AddPlaceContainer;
