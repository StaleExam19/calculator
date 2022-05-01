import * as calcDisplayState from "../states/calculatorDisplayState";
import * as resultState from "../states/resultState";

import { resultDisplay } from "../services/elements";
import { calcInput } from "../services/elements";

export default function onClear() {
    calcDisplayState.setState("");
    resultState.setState(0);

    resultDisplay!.innerHTML = "";
    calcInput!.innerHTML = "";
}