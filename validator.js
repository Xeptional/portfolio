const form = document.querySelector('form');
form.setAttribute('novalidate', true);



form.addEventListener('blur', e => {
  var error = hasError(e.target);

  if(error) {
    showError(e.target, error);;
    return
  }

  removeError(e.target);
}, true);

var hasError = (field) => {
  if(field.type === 'button') return;

  var validity = field.validity;
  if(validity.valid) return;

  if(validity.valueMissing) {
    return "Please fill out this field";
  }
  if(validity.typeMismatch) {
    return `Please enter a valid ${field.placeholder}`;
  }
  if(validity.patternMismatch) {
    return "Please match the required format";
  }

  return "The value you entered for this field is invalid";
}

var showError = (field, error) => {
  field.classList.add('error');

  if(!field.id) return;

  var fieldErr = document.querySelector(`#${field.id} + span.error-message`);

  field.setAttribute('aria-describedby', fieldErr.id);

  fieldErr.innerHTML = error;
  fieldErr.classList.add('active');
}

var removeError = (field) => {
  field.classList.remove('error');
  field.removeAttribute('aria-describedby');

  if(!field.id) return;

  var fieldErr = document.querySelector(`#${field.id} + span.error-message`);
  if(!fieldErr) return;
  
  fieldErr.innerHTML = "";
  fieldErr.classList.remove('active');
}

form.addEventListener('submit', (e) => {
  var fields = e.target.elements;

  var error, hasErrors;

  for(var i = 0; i < fields.length; i++) {
    error = hasError(fields[i]);

    if(error) {
      showError(fields[i], error);

      if(!hasErrors) {
        hasErrors = fields[i];
      }
    }
  }

  if(hasErrors) {
    e.preventDefault();
    hasErrors.focus();
  }

  //include HTTP method or AHAX submit process here.
}, false);