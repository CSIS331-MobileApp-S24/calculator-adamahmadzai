import React, { useState } from "react";
import "./Wrapper.css";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";

const Wrapper = () => {
  let [num, setNum] = useState(0);
  let [oper, setOper] = useState("");
  let [res, setRes] = useState(0);

  const numClickHandler = (btn) => {
    if (num.toString().length <= 12) {
      num = num + btn;
      num = parseInt(num);
      setNum(num);
    }
  };
  const decClickHandler = (btn) => {
    console.log("in decClickHandler");
    console.log(btn);
  };
  const equalClickHandler = (btn) => {
    console.log("in equalClickHandler");
    console.log(btn);
  };
  const operClickHandler = (btn) => {

    if (btn === "+"){
        if(oper == ""){
            oper = btn;
            res = num;
            num = 0;
        }
        res = res + num;
        num = 0;
        

    }
    console.log("in operClickHandler");
    console.log(btn);
  };
  const percentClickHandler = (btn) => {
    if(num.toString().length <12){
        num = num /100;
        console.log("in percentClickHandler");
        console.log(btn);
        setNum(num);

    }
  
  };
  const invertClickHandler = (btn) => {
    num = num * -1;
    console.log("in invertClickHandler");
    console.log(btn);
    setNum(num);
  };
  const resetClickHandler = (btn) => {
  num = 0;
  console.log("in resetClickHandler");
    setNum(num);
  };

  let onButtonClick = (event) => {
    const btn = event.target.innerHTML;

    switch (btn) {
      case "+-":
        invertClickHandler(btn);
        break;
      case "C":
        resetClickHandler(btn);
        break;
      case "=":
        equalClickHandler(btn);
        break;
      case "%":
        percentClickHandler(btn);
        break;
      case "/":
        operClickHandler(btn);
        break;
      case "*":
        operClickHandler(btn);
        break;
      case "-":
        operClickHandler(btn);
        break;
      case "+":
        operClickHandler(btn);
        break;
      case ".":
        decClickHandler(btn);
        break;
      default:
        numClickHandler(btn);
        break;
    }
    console.log("after the handlers");
    console.log("num: " + num);
    console.log("res: " + res);
    console.log("oper: " + oper);
  };

  return (
    <div className="wrapper bg-dark-gray pa2 br2">
      <Screen value={num} />
      <ButtonBox handleClick={onButtonClick} />
    </div>
  );
};

export default Wrapper;
