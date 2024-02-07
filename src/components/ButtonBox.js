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

const ButtonBox = () => {
  return (
    <div className="buttonBox">
      {btnValues.flat().map((btn, i) => {
        if (btn === "=") {
            return (
                <Button
                  className="eqbutton"
                  value={btn}
                  onClick={() => {
                    console.log(`Button ${btn} Clicked!`);
                  }}
                />
              );
        }
        else{

            return (
                <Button
                  className=""
                  value={btn}
                  onClick={() => {
                    console.log(`Button ${btn} Clicked!`);
                  }}
                />
              );
        }
      })}
    </div>
  );
};

export default ButtonBox;
