import validator from 'validator';

const SHOW_ERROR_MESSAGES = 'show-error-message' as string;

const form = document.querySelector(".form") as HTMLFormElement;
const username = document.querySelector(".username") as HTMLInputElement;
const email = document.querySelector(".email") as HTMLInputElement;
const password = document.querySelector(".password") as HTMLInputElement;
const password2 = document.querySelector(".password2") as HTMLInputElement;

form.addEventListener('submit', function (e: Event) {
  e.preventDefault();
  //o this dessa proxima funcao é o proprio formulario (não funciona com arrow functions)
  hideErrorMessages(this);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPassword(password, password2);
  if (shouldSendForm(this)) console.log('Form ENVIADO!!')//form.submit();
})

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo vazio');
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!validator.isEmail(input.value)) showErrorMessage(input, 'Email inválido')
}

function checkEqualPassword(password: HTMLInputElement, password2: HTMLInputElement) {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Senhas não batem');
    showErrorMessage(password2, 'Senhas não batem');
  }
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(".error-message") as HTMLSpanElement;
  errorMessage.innerHTML = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function hideErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(item => item.classList.remove(SHOW_ERROR_MESSAGES))
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(() => (send = false));
  return send;
}
