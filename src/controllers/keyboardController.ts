import * as calcDisplayState from "../states/calculatorDisplayState";
import { possibleInput, operators } from "../states/constants";
import * as resultState from "../states/resultState";
import { evaluate } from "../services/evaluate";

import { calcInput, resultDisplay } from "../services/elements";

// import calculate from "../services/calculate";

function parse(str: string) {
    return Function(`'use strict'; return (${str})`)()
}
  
export default function keyboardController() {

    document.addEventListener("keydown", evt => {
        let currentState = calcDisplayState.getState();

        if (possibleInput.includes(evt.key)) {
            calcDisplayState.setState(currentState += evt.key);


            if (!operators.includes(calcDisplayState.getState()[calcDisplayState.getState().length - 1])) {
                resultState.setState(evaluate(calcDisplayState.getState()));
            }

            resultDisplay!.innerHTML = resultState.getState().toString();
        }

        if (evt.key === "Backspace") {
            calcDisplayState.setState(currentState.replace(/.$/, ""));
            if (!operators.includes(calcDisplayState.getState()[calcDisplayState.getState().length - 1])) {
                resultState.setState(evaluate(calcDisplayState.getState()));
            }
            resultDisplay!.innerHTML = resultState.getState() ? resultState.getState().toString() : "";
        }
        
        
        calcInput!.innerHTML = calcDisplayState.getState();
    });
}