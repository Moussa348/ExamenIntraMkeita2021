import React, { useState } from "react";
import axios from "axios";

const Button = ({ data }) => {
  const [random, setRandom] = useState(Math.floor(Math.random() * 6) + 1);

  const register = () => {
    data.randomNumber = random;
    console.log(data.randomNumber);

    if (data.randomNumber == data.yourNumber) {
      data.guessIsRight = true;
      alert(
        "Le dé est : " +
          data.randomNumber +
          " Votre choix est : " +
          data.yourNumber +
          ", vous avez gagné!"
      );
    } else {
      alert(
        "Le dé est : " +
          data.randomNumber +
          " Votre choix est : " +
          data.yourNumber +
          ", vous avez perdu...:("
      );
    }

    axios({
      method: "POST",
      url: "http://localhost:4444/guessChoice/create/",
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
    <>
      <button
        className="btn shadow-lg rounded btn-primary border text-light"
        onClick={register}
      >
        COUP DE DÉ
      </button>
    </>
  );
};

export default Button;
