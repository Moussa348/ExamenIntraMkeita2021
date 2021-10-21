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

  const addInList = (data) => {
    list.push(data);
    setList(list);
  };

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <Form addInList={addInList}/>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="card border border-dark rounded">
            <div className="flex-row d-flex justify-content-center">
              <h1>List Of Guess Choices</h1>
            </div>
          </div>

          <div className="row d-flex justify-content-center m-5">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Guess Utilisateur</th>
                  <th scope="col">Numéro Random</th>
                </tr>
              </thead>

              <tbody>
                {list.map((value, key) => (
                  value.guessIsRight ?
                  <tr key={key} className="table-success">
                    <th scope="row">{value.id}</th>
                    <td>{value.name}</td>
                    <td>{value.yourNumber}</td>
                    <td>{value.randomNumber}</td>
                    <td>{value.guessIsRight}</td>
                  </tr>
                  : <tr key={key} className="table-danger">
                  <th scope="row">{value.id}</th>
                  <td>{value.name}</td>
                  <td>{value.yourNumber}</td>
                  <td>{value.randomNumber}</td>
                  <td>{value.guessIsRight}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
