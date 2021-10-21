import React, { useState } from "react";
import RegisterButton from "./RegisterButton";

const Form = () => {
  const [data, setData] = useState({
    id: null,
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const handleChange = ($event) => {
    console.log($event);
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
        <div className="flex-row d-flex justify-content-center mt-4">
          <h1>Formulaire</h1>
        </div>

        <div className="row d-flex justify-content-center m-5 mx-auto">
          <div className="card shadow-lg border border-dark rounded text-center">
            <div className="card-body">
              <form>
                <div className="form-group m-4">
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group m-4">
                  <input
                    value={data.firstName}
                    name="firstName"
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group m-4">
                  <input
                    value={data.lastName}
                    name="lastName"
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>

                <div className="form-group m-4">
                  <input
                    name="phoneNumber"
                    value={data.phoneNumber}
                    onChange={handleChange}
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
              </form>
            </div>
          </div>
          <RegisterButton/>
        </div>
      </div>
    </>
  );
};

export default Form;
