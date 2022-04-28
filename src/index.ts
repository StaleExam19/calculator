import createCalculator from "./services/createCalculator";
import keyboardController from "./controllers/keyboardController";
import buttonController from "./controllers/buttonController";


document.addEventListener("DOMContentLoaded", evt => {
    // createCalculator();
    keyboardController();
    buttonController();
});