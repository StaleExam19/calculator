import * as calcDisplayState from "../states/calculatorDisplayState";
import { possibleInput, operators } from "../states/constants";
import * as resultState from "../states/resultState";
import * as firstNum from "../states/firstNum";
import * as secondNum from "../states/secondNum";

import { calcInput } from "../services/elements";
import calculate from "../services/calculate";

type Operation = "+" | "-" | "/" | "*";


export default function keyboardController() {
    let isFirst = true;
    let operator: Operation;

    document.addEventListener("keydown", evt => {
        let currentState = calcDisplayState.getState();

        if (possibleInput.includes(evt.key)) {
            let first = firstNum.getState();
            let second = secondNum.getState();

            calcDisplayState.setState(currentState += evt.key);

            if (isFirst && !operators.includes(evt.key))
                firstNum.setState(first += evt.key);
            else if (!isFirst && !operators.includes(evt.key))
                secondNum.setState(second += evt.key);

            calcInput!.innerHTML = calcDisplayState.getState();
        }

        if (evt.key === "Backspace")
            calcDisplayState.setState(currentState.replace(/.$/, ""));

    });
}