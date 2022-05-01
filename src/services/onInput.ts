import * as calcDisplayState from "../states/calculatorDisplayState";
import { operators } from "../states/constants";
import * as resultState from "../states/resultState";

import { evaluate } from "../services/evaluate";

import { resultDisplay } from "../services/elements";
import { calcInput } from "../services/elements";


export default function onInput(key: any) {
    let currentState = calcDisplayState.getState();

    calcDisplayState.setState(currentState += key);

    if (!operators.includes(calcDisplayState.getState()[calcDisplayState.getState().length - 1]))
        resultState.setState(
            evaluate(calcDisplayState.getState()));

    resultDisplay!.innerHTML = resultState.getState().toString();
    calcInput!.innerHTML = calcDisplayState.getState();
}