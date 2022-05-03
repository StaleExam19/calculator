export const evaluate = (expression: string) => {
    return Function(`'use strict'; 
            return ${expression}`)();
};