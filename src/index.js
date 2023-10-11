import './styles/_index.scss';
import './images/index.js';

const newsletterSignupFormElement = document.querySelector(
  '.form_type_newsletter-signup'
);

newsletterSignupFormElement.addEventListener('submit', e => {
  e.preventDefault();
  const emailValidationPattern =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const emailInputElement = e.target[0];
  const emailInputValue = emailInputElement.value.trim();
  const emailInputErrorMessageElement = document.querySelector(
    '[error-msg-for="email"]'
  );
  const isEmailValid = emailValidationPattern.test(emailInputValue);
  const isEmailEmpty = emailInputValue === '';

  if (isEmailValid) {
    emailInputElement.classList.remove('form__input_is-invalid');
    emailInputErrorMessageElement.classList.add('from__error-msg_is-hidden');
  } else {
    if (isEmailEmpty) {
      emailInputErrorMessageElement.innerText =
        'Whoops! It looks like you forgot to add your email';
    } else {
      emailInputErrorMessageElement.innerText = 'Please provide a valid email';
    }
    emailInputElement.classList.add('form__input_is-invalid');
    emailInputErrorMessageElement.classList.remove('from__error-msg_is-hidden');
  }
});
