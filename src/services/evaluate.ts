export const evaluate = (expression: string) => Function(`'use strict'; 
return ${expression}`)();