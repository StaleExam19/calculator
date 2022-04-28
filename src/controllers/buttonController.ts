import { calcInput } from "../services/elements";
import * as calcDisplayState from "../states/calculatorDisplayState";
import { possibleInput } from "../states/constants";


export default function buttonController() {
    document.addEventListener("click", evt => {
        let currentState = calcDisplayState.getState();
        const target = (<HTMLElement>evt.target);
        const value = target.getAttribute("data-value");        
        
        if (!target.matches("[data-value]")) return;

        if (possibleInput.includes(value!)) 
            calcDisplayState.setState(currentState += value);

        if (value === "⌫")
            calcDisplayState.setState(currentState.replace(/.$/, ""));

        calcInput!.innerHTML = calcDisplayState.getState();
    });
}