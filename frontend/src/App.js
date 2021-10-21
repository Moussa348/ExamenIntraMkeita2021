import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ListGuessChoice from "./component/ListGuessChoice";
import Form from "./component/Form";

function App() {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <Form />
        </div>
        <div className="row d-flex justify-content-center">
          <div className="card border border-dark rounded">
            <ListGuessChoice />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
