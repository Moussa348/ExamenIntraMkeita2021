import React, { useState } from "react";
import Button from "./Button";

const Form = ({addInList}) => {
  const [data, setData] = useState({
    id: null,
    name: "",
    randomNumber: 0,
    yourNumber: 0,
    guessIsRight: false,
  });

  const handleChange = ($event) => {
    const { name, value } = $event.target;
    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };

  return (
    <>
      <div className="container">
        <div className="card border border-dark rounded m-4">
          <div className="flex-row align-items-center d-flex justify-content-center mt-4">
            <h1>Formulaire</h1>
          </div>
        </div>

        <div className="row d-flex justify-content-center m-5 mx-auto">
          <div className="card shadow-lg border border-dark rounded text-center">
            <div className="card-body">
              <form id="form">
                <div className="form-group m-4">
                  <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group m-4">
                  <input
                    value={data.yourNumber}
                    name="yourNumber"
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    placeholder="Choose A Number"
                  />
                </div>
              </form>
            </div>
          </div>
          <Button data={data} addInList={addInList} />
        </div>
      </div>
    </>
  );
};

export default Form;
