import React from "react";
import axios from "axios";

const RegisterButton = ({ data }) => {
  const register = () => {
    axios({
      method: "POST",
      url: "http://localhost:4444/user/create/",
      responseType: "json",
      data: data,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <button
      className="btn shadow-lg rounded btn-success border text-light"
      onClick={register}
    >
      REGISTER
    </button>
  );
};

export default RegisterButton;