import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Form from "./component/Form";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const findAll = () => {
      axios({
        method: "GET",
        url: "http://localhost:4444/guessChoice/findAll/",
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
  }, []);

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <Form />
        </div>
        <div className="row d-flex justify-content-center">
          <div className="card border border-dark rounded">
            <div className="flex-row d-flex justify-content-center">
              <h1>List Of Guess Choices</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
