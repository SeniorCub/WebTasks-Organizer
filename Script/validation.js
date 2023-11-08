// Get references to form fields and the submit button
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const birthdateInput = document.getElementById('birthdate');
const usernameInput = document.getElementById('username');
const CrPwdInput = document.getElementById('CrPwd');
const CoPwdInput = document.getElementById('CoPwd');
const saveButton = document.getElementById('save');

// Add an event listener to the form submit button
saveButton.addEventListener('click', function (event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Validate the form fields
  if (
    validateField(firstNameInput) &&
    validateField(lastNameInput) &&
    validateEmail(emailInput) &&
    validatePhone(phoneInput) &&
    validateDateOfBirth(birthdateInput) &&
    validateUsername(usernameInput) &&
    validatePassword(CrPwdInput, CoPwdInput)
  ) {
    // If all fields are valid, populate the second modal
    const fullName = firstNameInput.value + ' ' + lastNameInput.value;
    const userName = usernameInput.value;
    const userEmail = emailInput.value;
    const userPhone = phoneInput.value;
    const userBirthdate = birthdateInput.value;

    // Update the second modal with the user's information
    document.getElementById('fullName').textContent = fullName;
    document.getElementById('userName').textContent = userName;
    document.getElementById('email').textContent = userEmail;
    document.getElementById('phoneNumber').textContent = userPhone;
    document.getElementById('birthDay').textContent = userBirthdate;

    // Close the first modal and open the second modal
    const firstModal = new bootstrap.Modal(document.getElementById('exampleModalToggle'));
    const secondModal = new bootstrap.Modal(document.getElementById('exampleModalToggle2'));

    firstModal.hide();
    secondModal.show();
  }
});


function showError(inputField, errorMessage) {
  const formGroup = inputField.closest('.form-group');
  formGroup.classList.add('has-error');
  const errorDiv = document.createElement('div');
  errorDiv.className = 'text-danger';
  errorDiv.innerText = errorMessage;
  formGroup.appendChild(errorDiv);
}

function showSuccess(inputField) {
  const formGroup = inputField.closest('.form-group');
  formGroup.classList.remove('has-error');
  const errorDiv = formGroup.querySelector('.text-danger');
  if (errorDiv) {
    formGroup.removeChild(errorDiv);
  }
}


// Validation functions
function validateField(inputField) {
  const value = inputField.value.trim();
  if (value === '') {
    showError(inputField, 'This field is required');
    return false;
  } else {
    showSuccess(inputField);
    return true;
  }
}

function validateEmail(emailField) {
  const email = emailField.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError(emailField, 'Enter a valid email address');
    return false;
  } else {
    showSuccess(emailField);
    return true;
  }
}

function validatePhone(phoneField) {
  const phone = phoneField.value.trim();
  const phoneRegex = /^\+?\d{10,}$/;
  if (!phoneRegex.test(phone)) {
    showError(phoneField, 'Enter a valid phone number');
    return false;
  } else {
    showSuccess(phoneField);
    return true;
  }
}

function validateDateOfBirth(dateField) {
  const birthdate = dateField.value;
  // You can add more specific date validation logic here if needed
  if (!birthdate) {
    showError(dateField, 'Enter a valid date of birth');
    return false;
  } else {
    showSuccess(dateField);
    return true;
  }
}

function validateUsername(usernameField) {
  const username = usernameField.value.trim();
  if (username === '') {
    showError(usernameField, 'This field is required');
    return false;
  } else {
    showSuccess(usernameField);
    return true;
  }
}

function validatePassword(passwordField, confirmPasswordField) {
  const password = passwordField.value;
  const confirmPassword = confirmPasswordField.value;

  if (password !== confirmPassword) {
    showError(confirmPasswordField, 'Passwords do not match');
    return false;
  } else {
    showSuccess(confirmPasswordField);
    return true;
  }
}
