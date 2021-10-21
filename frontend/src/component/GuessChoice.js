import React, { useState } from "react";
import Button from "./Button";

const GuessChoice = ({
  id,
  name,
  randomNumber,
  yourNumber,
  guessIsRight,
  addInList,
}) => {
  const [data, setData] = useState({
    id: id,
    name: name,
    randomNumber: randomNumber,
    yourNumber: yourNumber,
    guessIsRight: guessIsRight,
  });

  return (
    <>
    </>
  );
};

export default GuessChoice;
