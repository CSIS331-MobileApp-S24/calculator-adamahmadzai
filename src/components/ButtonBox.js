import React from "react";
import "./ButtonBox.css";
import Button from "./Button.js";

const btnValues = [
  ["C", "+-", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];

const ButtonBox = ({handleClick}) => {
  return (
    <div className="buttonBox">
      {btnValues.flat().map((btn, i) => {
        if (btn === "=") {
            return (
                <Button
                  className="eqbutton"
                  value={btn}
                  onClick={handleClick}
                  key = {i}
                />
              );
        }
        else{

            return (
                <Button
                  className="notequalbutton"
                  value={btn}
                  onClick={handleClick}
                  key = {i}
                />
              );
        }
      })}
    </div>
  );
};

export default ButtonBox;
