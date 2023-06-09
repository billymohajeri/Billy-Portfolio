const formReloads = document.querySelector('#form');

let formData = {
  name: '',
  email: '',
  msg: '',
};

const formInputListens = (inputType) => {
  formReloads.elements[inputType].addEventListener('input', () => {
    formData[inputType] = formReloads.elements[inputType].value;
    localStorage.setItem('form-data', JSON.stringify(formData));
  });
};

const setFormInput = (inputType) => {
  formReloads.elements[inputType].value = JSON.parse(localStorage['form-data'])[
    inputType
  ];
};

window.addEventListener('load', () => {
  if (localStorage.getItem('form-data') === null) {
    localStorage.setItem('form-data', JSON.stringify(formData));
  } else {
    formData = JSON.parse(localStorage.getItem('form-data'));
  }
  formInputListens('name');
  formInputListens('email');
  formInputListens('msg');
  setFormInput('name');
  setFormInput('email');
  setFormInput('msg');
});
