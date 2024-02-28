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
    }
  };
  let decClickHandler = (btn) => { 
    if (!num.toString().includes(".")) {
      // If it doesn't, append a decimal point
      num = num + ".";
  }
    console.log("in dec click handler");
    console.log(btn);
};
  const equalClickHandler = (btn) => {
    if (oper === "+") {
      res = res + num;
    }
    if (oper === "-") {
      res = res - num;
    }
    if (oper === "*") {
      res = res * num;
    }
    if (oper === "/") {
      res = res / num;
    }
    num = 0;
    oper = "";
  };
  const operClickHandler = (btn) => {
    if (oper == "") {
      res = num;
    } else {
      if (oper === "+") {
        res = res + num;
      }
      if (oper === "-") {
        res = res - num;
      }
      if (oper === "*") {
        res = res * num;
      }
      if (oper === "/") {
        res = res / num;
      }
    }
    num = 0;
    oper = btn;
    console.log("in operClickHandler");
    console.log(btn);
  };
  const percentClickHandler = (btn) => {
    if (num.toString().length < 12) {
      num = num / 100;
      console.log("in percentClickHandler");
      console.log(btn);
    }
  };
  const invertClickHandler = (btn) => {
    num = num * -1;
    console.log("in invertClickHandler");
    console.log(btn);
  };
  const resetClickHandler = (btn) => {
    num = 0;
    res = 0;
    oper = "";
    console.log("in resetClickHandler");
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
    setNum(num);
    setOper(oper);
    setRes(res);
    console.log("after the handlers");
    console.log("num: " + num);
    console.log("res: " + res);
    console.log("oper: " + oper);
  };

  return (
    <div className="wrapper bg-dark-gray pa2 br2">
      <Screen value={num ? num : res} />
      <ButtonBox handleClick={onButtonClick} />
    </div>
  );
};

export default Wrapper;
