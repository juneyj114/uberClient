import React, { useState } from "react";
import PlacePresenter from "./PlacePresenter";
import axios from "../../api";
import { toast } from "react-toastify";

interface IProps {
  fav: boolean;
  name: string;
  address: string;
  id: number;
}

const PlaceContainer = ({ fav, name, address, id }: IProps) => {
  const [state, setState] = useState({
    fav
  });

  const onStarPress = async () => {
    const res = await axios.put("/place", { id, name, isFav: fav });
    if (res.status === 202) {
      setState({
        fav: !state.fav
      });
    } else {
      toast.error("error");
    }
  };

  return (
    <PlacePresenter
      fav={state.fav}
      name={name}
      address={address}
      onStarPress={onStarPress}
    />
  );
};

export default PlaceContainer;
