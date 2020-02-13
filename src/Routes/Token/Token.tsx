import React from "react";
import axios from "../../api";

const Token = () => {
  axios.get("http://localhost:8080/token").then(res => {
    localStorage.setItem("jwt", res.data);
    window.location.href = "/";
  });
  return <div></div>;
};

export default Token;
