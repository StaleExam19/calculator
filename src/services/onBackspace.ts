import * as calcDisplayState from "../states/calculatorDisplayState";
import { operators } from "../states/constants";
import * as resultState from "../states/resultState";
import { calcInput } from "./elements";

import { resultDisplay } from "./elements";
import { evaluate } from "./evaluate";

export default function onBackspace() {
    let currentState = calcDisplayState.getState();

    calcDisplayState.setState(currentState.replace(/.$/, ""));

    if (operators.includes(calcDisplayState.getState()[calcDisplayState.getState().length - 1]))
        resultState.setState(
            evaluate(calcDisplayState.getState().replace(/.$/, "")));
    else
        resultState.setState(
            evaluate(calcDisplayState.getState()));

    resultDisplay!.innerHTML = resultState.getState() ?
        resultState.getState().toString() : "";

    calcInput!.innerHTML = calcDisplayState.getState();

}