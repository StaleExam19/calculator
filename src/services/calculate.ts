import * as resultState from "../states/resultState";
import * as firstNum from "../states/firstNum";
import * as secondNum from "../states/secondNum";

type Operation = "+" | "-" | "/" | "*";

export default function calculate (operation: Operation) {


    const first = parseFloat(firstNum.getState())
    const second = parseFloat(secondNum.getState())
    switch(operation) {
        case "+":
            resultState.setState(first + second);
            break;
        case "-":
            resultState.setState(first - second);
            break;
        case "*":
            resultState.setState(first * second);
            break;
        case "/":
            resultState.setState(first / second);
            break;
    }
}