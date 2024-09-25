import validator from 'validator';

const formFields = document.getElementsByClassName('form-fields');
const form = document.getElementById('form') as HTMLFormElement;

export function getErrorEmpty(formField: HTMLCollection) {
  for (let i=0; formField.length > i; i++) {
    if (formField[i].classList.contains('empty-field')) {
      const fieldInAnalysis = formField[i] as HTMLElement;
      fieldInAnalysis.style.display = "block";
    }
  }
}

export function submitForm() {
  form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const errorMessages = document.querySelectorAll(".error-message") as NodeListOf<HTMLElement>;
    for (let l=0; errorMessages.length > l; l++) {
      errorMessages[l].style.display = "none"
    }

    for (let i=0; formFields.length > i; i++) {
      for (let j=0; formFields[i].children.length > j; j++) {
        if (formFields[i].children[j].tagName === 'INPUT') {
          //input verification
          const inputEl = formFields[i].children[j] as HTMLInputElement;
          //empty Error
          if (!inputEl.value) {
            getErrorEmpty(formFields[i].children);
          }

          //invalid username
          if (inputEl.classList.contains('username')) {
            console.log(inputEl.value.length)
            if ((inputEl.value.length <= 3) && inputEl.value) {

              const usernameInput = document.querySelector('input[id="username"]') as HTMLInputElement;

              if (usernameInput) {
                let nextSibling = usernameInput.nextElementSibling as HTMLInputElement;

                while(nextSibling) {
                  if (nextSibling.classList.contains('error-message') && !nextSibling.classList.contains('empty-field')) {
                    nextSibling.style.display = "block"
                    break
                  }
                  nextSibling = nextSibling.nextElementSibling as HTMLInputElement;
                }
              }
            }
          }

          //invalid email
          if (inputEl.classList.contains('email')) {
            if (!validator.isEmail(inputEl.value) && inputEl.value) {
              const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;

              if (emailInput) {
                let nextSibling = emailInput.nextElementSibling as HTMLInputElement;

                while(nextSibling) {
                  if (nextSibling.classList.contains('error-message') && !nextSibling.classList.contains('empty-field')) {
                    nextSibling.style.display = "block"
                    break
                  }
                  nextSibling = nextSibling.nextElementSibling as HTMLInputElement;
                }
              }
            }
          }

          //password doesn't match
          if (inputEl.type === 'password') {
            const passwordInput = document.querySelector('input[name="password"]') as HTMLInputElement;
            const passwordInput2 = document.querySelector('input[name="password2"]') as HTMLInputElement;

            if (passwordInput.value !== passwordInput2.value) {
              let nextSibling = passwordInput.nextElementSibling as HTMLInputElement;

                while(nextSibling) {
                  if (nextSibling.classList.contains('error-message') && !nextSibling.classList.contains('empty-field')) {
                    nextSibling.style.display = "block"
                    break
                  }
                  nextSibling = nextSibling.nextElementSibling as HTMLInputElement;
                }

              nextSibling = passwordInput2.nextElementSibling as HTMLInputElement;

                while(nextSibling) {
                  if (nextSibling.classList.contains('error-message') && !nextSibling.classList.contains('empty-field')) {
                    nextSibling.style.display = "block"
                    break
                  }
                  nextSibling = nextSibling.nextElementSibling as HTMLInputElement;
                }
            }
          }
        }
      }
    }
  })
}

submitForm();
