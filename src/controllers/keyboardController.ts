import * as calcDisplayState from "../states/calculatorDisplayState";
import { possibleInput, operators } from "../states/constants";
import * as resultState from "../states/resultState";

import { calcInput, resultDisplay, buttons } from "../services/elements";
import { evaluate } from "../services/evaluate";

export default function keyboardController() {
    document.addEventListener("keydown", evt => {
        let currentState = calcDisplayState.getState();

        if (possibleInput.includes(evt.key)) {
            calcDisplayState.setState(currentState += evt.key);


            if (!operators.includes(calcDisplayState.getState()[calcDisplayState.getState().length - 1]))
                resultState.setState(
                    evaluate(calcDisplayState.getState()));

            resultDisplay!.innerHTML = resultState.getState().toString();
        }
        
        if (evt.key === "Backspace") {
            calcDisplayState.setState(currentState.replace(/.$/, ""));

            if (operators.includes(calcDisplayState.getState()[calcDisplayState.getState().length - 1]))
                resultState.setState(
                    evaluate(calcDisplayState.getState().replace(/.$/, "")));
            else
                resultState.setState(
                    evaluate(calcDisplayState.getState()));

            resultDisplay!.innerHTML = resultState.getState() ? 
                resultState.getState().toString() : "";
        }


        calcInput!.innerHTML = calcDisplayState.getState();
    });



    document.addEventListener("keydown", evt => {
        buttons.forEach(val => {
            if (val.getAttribute("data-value") == evt.key) {
                val.classList.add("bg-zinc-800");
            }
        });
    });

    document.addEventListener("keyup", evt => {
        buttons.forEach(val => {
            if (val.getAttribute("data-value") == evt.key) {
                val.classList.remove("bg-zinc-800");
            }
        });
    })
}