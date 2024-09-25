/* Recomendado */
// Condicional
const body1 = document.querySelector(`body`);
if (body1) body1.style.background = `red`;

// Type Assertions
const body2 = document.querySelector(`body`) as HTMLBodyElement;
body2.style.background = `red`;

// HTMLElement
const input = document.querySelector(`.input`) as HTMLInputElement;
input.value = `red`;
input.focus();

/* Não Recomendado */
// Type assertion para um tipo que não deveria ser
const body4 = (document.querySelector('body') as unknown) as number;

// Non-null assertion (!) basicamente aqui vc diz que body5 jamais vai ser null
const body5 = document.querySelector(`body`)!;
body2.style.background = `red`;
