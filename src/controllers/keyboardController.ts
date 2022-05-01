import { possibleInput } from "../states/constants";

import { buttons } from "../services/elements";
import onBackspace from "../services/onBackspace";
import onInput from "../services/onInput";
import onEquals from "../services/onEquals";

export default function keyboardController() {
    document.addEventListener("keydown", evt => {
        if (possibleInput.includes(evt.key)) onInput(evt.key);
        if (evt.key === "Backspace") onBackspace();
        if (evt.key === "Enter") onEquals();
    });

    document.addEventListener("keydown", evt => {
        buttons.forEach(val => {
            if (val.getAttribute("data-value") == evt.key)
                val.classList.add("bg-zinc-800");
        });
    });

    document.addEventListener("keyup", evt => {
        buttons.forEach(val => {
            if (val.getAttribute("data-value") == evt.key)
                val.classList.remove("bg-zinc-800");
        });
    })
}