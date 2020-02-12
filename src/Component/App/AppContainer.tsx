import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { IS_LOGGED_IN } from "./AppQueries";
import AppPresenter from "./AppPresenter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const AppContainer = () => {
  const { data } = useQuery(IS_LOGGED_IN);
  return (
    <React.Fragment>
      <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
      <ToastContainer
        draggable={true}
        position={toast.POSITION.BOTTOM_CENTER}
      />
    </React.Fragment>
  );
};

export default AppContainer;
