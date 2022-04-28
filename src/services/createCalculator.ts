import { buttons } from "./elements"

const btnLayout = [
    "C", "CE", `⌫`, "-",
    "7", "8", "9", "+",
    "4", "5", "6", "*",
    "1", "2", "3", "/",
    ".", "0", ".", "="
];

interface DataSet {
    value: string
}

export default function createCalculator() {
    for (let i = 0; i < btnLayout.length; i++) {
        const container = document.createElement("div");
        const button = document.createElement("button");
        button.innerHTML = btnLayout[i];



        button.addEventListener("focus", evt => (<HTMLElement>evt.currentTarget).blur())

        button.className =
            "py-[1rem] px-[3rem] border-2 border-zinc-800 rounded " +
            "transition-all hover:bg-zinc-800 outline-none";

        (<DataSet & DOMStringMap>button.dataset).value = btnLayout[i];
        container.className = "flex justify-center items-center"

        container.appendChild(button);
        buttons?.appendChild(container);
    }
}