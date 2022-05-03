import * as calcDisplayState from "../states/calculatorDisplayState";
import { operators } from "../states/constants";
import * as resultState from "../states/resultState";
import * as currentOperator from "../states/currentOperator";

import { evaluate } from "../services/evaluate";

import { resultDisplay } from "../services/elements";
import { calcInput } from "../services/elements";


export default function onInput(key: any) {
    let currentState = calcDisplayState.getState();

    if (calcDisplayState.getState().startsWith("0"))
        calcDisplayState.setState(key);
    else 
        calcDisplayState.setState(currentState += key);

    if (!operators.includes(calcDisplayState.getState()[calcDisplayState.getState().length - 1]))
        resultState.setState(
            evaluate(calcDisplayState.getState()));


    if (operators.includes(key))
            currentOperator.setState(key);

        resultDisplay!.innerHTML = resultState.getState().toString();
        calcInput!.innerHTML = calcDisplayState.getState();


    if (key == "0" && currentOperator.getState() == "/") {
        calcDisplayState.setState("0");
        resultState.setState(0);
        resultDisplay!.innerHTML = "error";
    }
}