import React, { useState, useEffect } from "react";
import axios from "axios";
import Get from "./Get";

const GetList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const findAll = () => {
      axios({
        method: "GET",
        url: "http://localhost:4444/user/getListUser/",
        responseType: "json",
      })
        .then((response) => {
          console.log(response.data);
          setList(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    findAll();
    console.log(list);
  }, []);

  const removeById = (id) => {
    setList(list.filter((o) => o.id != id));
  };

  return (
    <>
      <div className="container">
        {list.map((object, key) => (
          <Get
            key={key}
            id={object.id}
            email={object.email}
            firstName={object.firstName}
            lastName={object.lastName}
            phoneNumber={object.phoneNumber}
            removeById={removeById}
          />
        ))}
      </div>
    </>
  );
};

export default GetList;
