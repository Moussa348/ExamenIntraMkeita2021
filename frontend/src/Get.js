import React from "react";
import axios from "axios";

const Get = ({ id, email, firstName, lastName, phoneNumber, removeById }) => {
  const deleteById = () => {
    axios({
      method: "DELETE",
      url: "http://localhost:4444/user/delete/" + id,
      responseType: "json",
    })
      .then((response) => {
        console.log(response.data);
        removeById(id);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="row d-flex justify-content-center m-2">
        <div className="card shadow border rounded text-center">
          <p>{email}</p>
          <p>{firstName}</p>
          <p>{lastName}</p>
          <p>{phoneNumber}</p>
        </div>
        <button className="btn btn-danger" onClick={deleteById}>
          {" "}
          DELETE
        </button>
      </div>
    </>
  );
};

export default Get;
