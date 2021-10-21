import React from "react";
import axios from "axios";

const DeleteButton = ({id,removeById}) => {
  const deleteById = () => {
    axios({
      method: "DELETE",
      url: "http://localhost:4444/user/delete/" + id,
      responseType: "json",
    })
      .then((response) => {
          console.log(id);
        console.log(response.data);
        removeById(id);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <button
      className="btn shadow-lg rounded btn-danger border"
      onClick={deleteById}
    >
      DELETE
    </button>
  );
};

export default DeleteButton;
