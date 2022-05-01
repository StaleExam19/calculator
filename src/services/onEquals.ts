import * as calcDisplayState from "../states/calculatorDisplayState";
import * as resultState from "../states/resultState";

import { calcInput } from "./elements";
import { resultDisplay } from "./elements";

export default function onEquals()  {
    calcDisplayState.setState(resultState.getState().toString());
    resultState.setState(0);

    calcInput!.innerHTML = calcDisplayState.getState();
    resultDisplay!.innerHTML = "";
}