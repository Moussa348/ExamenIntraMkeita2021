import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

const Get = ({ id, email, firstName, lastName, phoneNumber, removeById }) => {
  const [data, setData] = useState({
    id: id,
    email: email,
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
  });

  const handleChange = ($event) => {
    console.log($event);
    const {name, value} = $event.target;
    setData({
        ...data,[name]:value
    })
    console.log(data);
  };
  /*

    const handleFormChange = ($event) => {
        setData((previousForm) => ({
          ...previousForm,
          [$event.target.id || $event.target.name]: $event.target.value,
        }));
*/
  return (
    <>
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
                  readOnly={true}
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
        <DeleteButton id={id} removeById={removeById} />
        <UpdateButton id={id} data={data} />
      </div>
    </>
  );
};

export default Get;
