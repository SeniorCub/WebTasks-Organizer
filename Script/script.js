// Next on Form one
const next1 = document.querySelector('.next1').addEventListener("click", btn_next1);
// Next and Back on Form 2
const next2 = document.querySelector('.next2').addEventListener("click", btn_next2);
const back2 = document.querySelector('.back2').addEventListener("click", btn_back2);
// Next and Back on Form 3
const next3 = document.querySelector('.next3').addEventListener("click", btn_next3);
const back3 = document.querySelector('.back3').addEventListener("click", btn_back3);
// Back and Next on Form 4
const back4 = document.querySelector('.back4').addEventListener("click", btn_back4);
const next4 = document.querySelector('.next4').addEventListener("click", btn_next4);

// Inputs on Form 1
let firstName = document.querySelector('#first_name');
let lastName = document.querySelector('#last_name');
let userName = document.querySelector('#user_name');
// Inputs on Form 2
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let age = document.querySelector('#age');
// Inputs on Form 3
let crPwd = document.querySelector('#CrPwd');
let coPwd = document.querySelector('#CoPwd');
// Inputs on Form 4
let ckbox = document.querySelector('#ckbox');

// For Input filter
const fullNamePattern = /^[A-Za-z\s'\-]+$/;
// Define a regular expression pattern for email validation.
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Step 1
function btn_next1() {
     const form1 = document.querySelector('.form1')
     const form2 = document.querySelector('.form2')
     const form3 = document.querySelector('.form3')
     const form4 = document.querySelector('.form4')
     const line2 =document.querySelector('.line2')
     
     if (firstName.value == "" || lastName.value == "" || userName.value == "") {
          alert('Error');
     } else if (!fullNamePattern.test(firstName.value) || !fullNamePattern.test(lastName.value) || !fullNamePattern.test(userName.value)) {
          alert('Either First name or Last name or UserName has Invalid inputs');
     } else {
          line2.style.display = 'block'
          form1.style.left = '-600px'
          form2.style.left = '130px'
          form3.style.left = '600px'
          form4.style.left = '1070px'
     }
};
// Step 2
function btn_next2() {
     const form1 = document.querySelector('.form1')
     const form2 = document.querySelector('.form2')
     const form3 = document.querySelector('.form3')
     const form4 = document.querySelector('.form4')
     const line3 =document.querySelector('.line3')
     const ageValue = parseInt(age.value);

     if (email.value == "" || phone.value == "" || age.value == "") {
          alert('Error')
     } else if (!emailPattern.test(email.value) ) {
          alert('Invalid email phone');
     } else if (isNaN(ageValue) || ageValue < 0 || ageValue > 150) {
          alert('Invalid age');
     } else {
     line3.style.display = 'block'
     form1.style.left = '-1070px'
     form2.style.left = '-600px'
     form3.style.left = '130px'
     form4.style.left = '600px'
     }
};
function btn_back2() {
     const form1 = document.querySelector('.form1')
     const form2 = document.querySelector('.form2')
     const form3 = document.querySelector('.form3')
     const form4 = document.querySelector('.form4')
     const line2 =document.querySelector('.line2')

     line2.style.display = 'none'
     form1.style.left = '130px'
     form2.style.left = '600px'
     form3.style.left = '1070px'
     form4.style.left = '1540px'
};
// Step 3
function btn_back3() {
     const form1 = document.querySelector('.form1')
     const form2 = document.querySelector('.form2')
     const form3 = document.querySelector('.form3')
     const form4 = document.querySelector('.form4')
     const line3 =document.querySelector('.line3')

     line3.style.display = 'none'
     form1.style.left = '-600px'
     form2.style.left = '130px' 
     form3.style.left = '600px'
     form4.style.left = '1070px'
};
function btn_next3() {
     const form1 = document.querySelector('.form1')
     const form2 = document.querySelector('.form2')
     const form3 = document.querySelector('.form3')
     const form4 = document.querySelector('.form4')
     const line4 =document.querySelector('.line4')
     if (crPwd.value == "" || coPwd.value == "") {
          alert('Error')
     }else if (crPwd.value.length !== 8 || coPwd.value.length !== 8) {
          alert('Password must be exactly 8 characters long');
     } else if (crPwd.value === coPwd.value) {
          // Proceed to the next step
          line4.style.display = 'block'
          form1.style.left = '-1540px'
          form2.style.left = '-1070px' 
          form3.style.left = '-600px'
          form4.style.left = '130px'
     } else {
          alert('Passwords do not match');
     }
};
// Step 4
function btn_back4() {
     const form1 = document.querySelector('.form1')
     const form2 = document.querySelector('.form2')
     const form3 = document.querySelector('.form3')
     const form4 = document.querySelector('.form4')
     const line4 =document.querySelector('.line4')

     line4.style.display = 'none'
     form1.style.left = '-1070px'
     form2.style.left = '-600px'
     form3.style.left = '130px'
     form4.style.left = '600px'
};
function btn_next4() {
     if (ckbox.checked) {
          // For external link
          window.location.href = "https://www.github.com/seniorcub"
     } else {
          alert('Error')
     }
};