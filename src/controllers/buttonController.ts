import { possibleInput } from "../states/constants";
import onBackspace from "../services/onBackspace";
import onClear from "../services/onClear";
import onInput from "../services/onInput";
import onEquals from "../services/onEquals";


export default function buttonController() {
    document.addEventListener("click", evt => {
        const target = (<HTMLElement>evt.target);
        const value = target.getAttribute("data-value");        
        
        if (!target.matches("[data-value]")) return;

        if (possibleInput.includes(value!)) onInput(value);
        if (value === "⌫") onBackspace();
        if (value === "C") onClear();
        if (value === "=") onEquals();
    });
}