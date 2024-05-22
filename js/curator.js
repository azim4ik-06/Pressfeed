const formControl = document.querySelector(".needs-validation-demo");
const nameInputControl = document.querySelector("#validationDefault01");
const emailInputControl = document.querySelector("#validationDefault02");
const subjectInput = document.querySelector("#validationDefaultUsernameDemo");
const btnFormDemo = document.querySelector('.btn-form-demo');
const demoThanks = document.querySelector('.demo-thanks');
const btnXDemoThanks = document.querySelector('.btn-X-demo-thanks');
const btnXDemo = document.querySelector('.btn-X-demo');
const btnReg = document.querySelector('.btn-curator');
const overlayDemo = document.querySelector('.overlay-demo');
const demoVersion = document.querySelector('.demo-version');
console.log(formControl);
btnReg.addEventListener('click', btnDemoShow)

function btnDemoShow(){
    overlayDemo.classList.toggle('d-none');
    demoVersion.classList.toggle('d-none');
}

btnXDemo.addEventListener('click', closeDemo)

function closeDemo(){
    overlayDemo.classList.toggle('d-none');
    demoVersion.classList.toggle('d-none');
}

console.log(formControl);
formControl.addEventListener("submit", addFormControl);

const formsControl = [];
if (localStorage.getItem('formsControl')) {
  formsControl = JSON.parse(localStorage.getItem('formsControl'));
}

function addFormControl(evt) {
  evt.preventDefault();
  const emailValue = emailInputControl.value.trim();
  const nameValue = nameInputControl.value.trim();
  const subjectValue = subjectInput.value.trim();

  emailInputControl.classList.remove("is-invalid");
  emailInputControl.classList.remove("is-valid");

  nameInputControl.classList.remove("is-invalid");
  nameInputControl.classList.remove("is-valid");

  subjectInput.classList.remove("is-invalid");
  subjectInput.classList.remove("is-valid");

  const isValid = formControl.checkValidity();

  if (!isValid) {
    emailInputControl.classList.add("is-invalid");
    nameInputControl.classList.add("is-invalid");
    subjectInput.classList.add("is-invalid");
  } else {
    emailInputControl.classList.add("is-valid");
    nameInputControl.classList.add("is-valid");
    subjectInput.classList.add("is-valid");

    demoVersion.classList.toggle('d-none');
    demoThanks.classList.toggle('d-none');


    btnXDemoThanks.addEventListener('click', closeDemoThanks);

    function closeDemoThanks() {
      overlayDemo.classList.toggle('d-none');
      demoThanks.classList.toggle('d-none');
}
  }

  if (!isValid) {
    return;
  }

  const newForm = {
    id: crypto.randomUUID(),
    name : nameValue,
    email: emailValue,
    phone: subjectValue
  };

  formsControl.push(newForm);
  localStorage.setItem('formsControl', JSON.stringify(formsControl));

  emailInputControl.value = '';
  nameInputControl.value = '';
  subjectInput.value = '';
}