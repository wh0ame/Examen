const regForm = document.forms.regForm;

const firstnameField = regForm.firstname;
const lastnameField = regForm.lastname;
const patronymicField = regForm.patronymic;
const emailField = regForm.email;
const phoneField = regForm.phone;
const dateField = regForm.date;

regForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // firstname validation

  const firstnameErrorMessages = firstnameField.parentElement.children;
  const firstnameFieldValue = firstnameField.value
  if (firstnameFieldValue.length >= 3){
    firstnameErrorMessages.namedItem('length').style.display = 'none'
  }else{
    firstnameErrorMessages.namedItem('length').style.display = 'block'
  }


  if (/^[а-я]+$/i.test(firstnameFieldValue)){
    firstnameErrorMessages.namedItem('alphabet').style.display = 'none'
  }else{
    firstnameErrorMessages.namedItem('alphabet').style.display = 'block'
  }


  // lastname validation

  const lastnameErrorMessages = lastnameField.parentElement.children;
  const lastnameFieldValue = lastnameField.value
  if (lastnameFieldValue.length >= 3){
    lastnameErrorMessages.namedItem('length').style.display = 'none'
  }else{
    lastnameErrorMessages.namedItem('length').style.display = 'block'
  }


  if (/^[а-я]+$/i.test(lastnameFieldValue)){
    lastnameErrorMessages.namedItem('alphabet').style.display = 'none'
  }else{
    lastnameErrorMessages.namedItem('alphabet').style.display = 'block'
  }

  // patronymic validation

  const patronymicErrorMessages = patronymicField.parentElement.children;
  const patronymicFieldValue = patronymicField.value
  if (patronymicFieldValue.length >= 3){
    patronymicErrorMessages.namedItem('length').style.display = 'none'
  }else{
    patronymicErrorMessages.namedItem('length').style.display = 'block'
  }


  if (/^[а-я]+$/i.test(patronymicFieldValue)){
    patronymicErrorMessages.namedItem('alphabet').style.display = 'none'
  }else{
    patronymicErrorMessages.namedItem('alphabet').style.display = 'block'
  }

  // email validation

  const emailErrorMessages = emailField.parentElement.children;
  const emailFieldValue = emailField.value

  if (/^[a-z][a-z._0-9]+@[a-z]+\.[a-z]{2,3}$/i.test(emailFieldValue)){
    emailErrorMessages.namedItem('emailError').style.display = 'none'
  }else{
    emailErrorMessages.namedItem('emailError').style.display = 'block'
  }

  //phone validation

  const phoneErrorMessages = phoneField.parentElement.children;
  const phoneFieldValue = phoneField.value

  if (phoneFieldValue.length >= 11){
    phoneErrorMessages.namedItem('length').style.display = 'none'
  }
  else{
    phoneErrorMessages.namedItem('length').style.display = 'block'
  }

})