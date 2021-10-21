import React from "react";
import axios from "axios";

const UpdateButton = ({ data }) => {
  const update = () => {
    axios({
      method: "PUT",
      url: "http://localhost:4444/user/update/",
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
      className="btn shadow-lg rounded btn-info border text-light"
      onClick={update}
    >
      UPDATE
    </button>
  );
};

export default UpdateButton;
