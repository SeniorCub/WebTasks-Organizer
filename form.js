// To SignUp Button
const signn = document.querySelector(".signn").addEventListener("click",signup)
const opp2 = document.querySelector(".opp2").addEventListener("click",signup)
// Option Menu
const edit = document.querySelector(".edit").addEventListener("click",oppp)
// To signin Button
const back1 = document.querySelector(".back1").addEventListener("click",signin)
const opp1 = document.querySelector(".opp1").addEventListener("click",signin)
// Proile Button
const signupp = document.querySelector(".user").addEventListener("click",profil)
// Change password button
const chgps = document.querySelector(".chgpsd").addEventListener("click",chgpsd)
// Close Button
const close = document.querySelectorAll(".close")
for (let i = 0; i < close.length; i++) {
     close[i].addEventListener("click",closee)
}
// Sign Up Form
// Next on Form one
const next1 = document.querySelector('.next1').addEventListener("click", btn_next1);
// Next and Back on Form 2
const next2 = document.querySelector('.next2').addEventListener("click", btn_next2);
const back2 = document.querySelector('.back2').addEventListener("click", btn_back2);
// Next and Back on Form 3
const next3 = document.querySelector('.next3').addEventListener("click", btn_next3);
const back3 = document.querySelector('.back3').addEventListener("click", btn_back3);
// Back and Next on Form 4
// const back4 = document.querySelector('.back4').addEventListener("click", btn_back4);
// const next4 = document.querySelector('.next4').addEventListener("click", btn_next4);

// Sign In Form
// Next on Form one
// const nex1 = document.querySelector('.nex1').addEventListener("click", btn_nex1);
const nex11 = document.querySelector('.nex11').addEventListener("click", btn_nex1);
// const nex4 = document.querySelector('.nex4').addEventListener("click", btn_nex4);
// const bac4 = document.querySelector('.bac4').addEventListener("click", btn_bac4);
// const bac44 = document.querySelector('.bac44').addEventListener("click", btn_bac4);



// From Sign IN Form
let username = document.querySelector('#user_Name');
let EnPwdd = document.querySelector('#EnPwd');
let cKbox = document.querySelector('#cKbox');

// Sign Up Form
// Inputs on Form 1
let firstName = document.querySelector('#first_name');
let lastName = document.querySelector('#last_name');
let userName = document.querySelector('#user_name');
// Inputs on Form 2
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
// Inputs on Form 3
let crPwd = document.querySelector('#CrPwd');
let coPwd = document.querySelector('#CoPwd');

// For Input filter
const fullNamePattern = /^[A-Za-z\s'\-]+$/;
// regular expression pattern for email validation.
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


// Sign Up Form
// Step 1
function btn_next1() {
     const form1 = document.querySelector('.form1')
     const form2 = document.querySelector('.form2')
     const form3 = document.querySelector('.form3')
     // const form4 = document.querySelector('.form4')
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
          // form4.style.left = '1070px'
     }
};
// Step 2
function btn_next2() {
     const form1 = document.querySelector('.form1')
     const form2 = document.querySelector('.form2')
     const form3 = document.querySelector('.form3')
     // const form4 = document.querySelector('.form4')
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
     // form4.style.left = '600px'
     }
};
function btn_back2() {
     const form1 = document.querySelector('.form1')
     const form2 = document.querySelector('.form2')
     const form3 = document.querySelector('.form3')
     // const form4 = document.querySelector('.form4')
     const line2 =document.querySelector('.line2')

     line2.style.display = 'none'
     form1.style.left = '130px'
     form2.style.left = '600px'
     form3.style.left = '1070px'
     // form4.style.left = '1540px'
};
// Step 3
function btn_back3() {
     const form1 = document.querySelector('.form1')
     const form2 = document.querySelector('.form2')
     const form3 = document.querySelector('.form3')
     // const form4 = document.querySelector('.form4')
     const line3 =document.querySelector('.line3')

     line3.style.display = 'none'
     form1.style.left = '-600px'
     form2.style.left = '130px' 
     form3.style.left = '600px'
     // form4.style.left = '1070px'
};
function btn_next3() {
     const form1 = document.querySelector('.form1')
     const form2 = document.querySelector('.form2')
     const form3 = document.querySelector('.form3')
     // const form4 = document.querySelector('.form4')
     // const line4 =document.querySelector('.line4')
     if (crPwd.value == "" || coPwd.value == "") {
          alert('Error')
     }else if (crPwd.value.length !== 8 || coPwd.value.length !== 8) {
          alert('Password must be exactly 8 characters long');
     } else if (crPwd.value === coPwd.value) {
          // Proceed to the next step
          // line4.style.display = 'block'
          form1.style.left = '-1540px'
          form2.style.left = '-1070px' 
          form3.style.left = '-600px'
          // form4.style.left = '130px'
     } else {
          alert('Passwords do not match');
     }
};
// Step 4
function btn_back4() {
     const form1 = document.querySelector('.form1')
     const form2 = document.querySelector('.form2')
     const form3 = document.querySelector('.form3')
     // const form4 = document.querySelector('.form4')
     // const line4 =document.querySelector('.line4')

     // line4.style.display = 'none'
     form1.style.left = '-1070px'
     form2.style.left = '-600px'
     form3.style.left = '130px'
     // form4.style.left = '600px'
};

// Sign IN Form
// Step 1
function btn_nex1() {
     const form1 = document.querySelector('.for1')
     const form2 = document.querySelector('.for2')
     const line2 =document.querySelector('.lin2')
     
     if (username.value == "" || EnPwdd.value == "") {
          alert('Error');
     } else if (!fullNamePattern.test(username.value) ) {
          alert('Either First name or Last name or UserName has Invalid inputs');
     }else if (EnPwdd.value.length !== 8) {
          alert('Password must be exactly 8 characters long');
     }  else {
          line2.style.display = 'block'
          form1.style.left = '-600px'
          form2.style.left = '130px'
     }
}
function btn_bac4() {
     const form1 = document.querySelector('.for1')
     const form2 = document.querySelector('.for2')
     const line2 =document.querySelector('.lin2')

     line2.style.display = 'none'
     form1.style.left = '130px'
     form2.style.left = '600px'

}
function btn_nex4() {
     if (cKbox.checked) {
          const furm = document.querySelector("#form-page")
          const fur = document.querySelector("#sigg")
          const fu = document.querySelector("#opp")
          const f = document.querySelector("#profilee")
          furm.style.display = 'none'
          fur.style.display = 'none'
          fu.style.display = 'none'
          f.style.display = 'block'
     } else {
          alert('Error')
     }
};





function signup() {
     const furm = document.querySelector("#form-page")
     const fur = document.querySelector("#sigg")
     const fu = document.querySelector("#opp")
     const f = document.querySelector("#profilee")
     const fo = document.querySelector("#chg-page")
     furm.style.display = 'block'
     fo.style.display = 'none'
     fur.style.display = 'none'
     fu.style.display = 'none'
     f.style.display = 'none'
}
function signin() {
     const furm = document.querySelector("#form-page")
     const fur = document.querySelector("#sigg")
     const fu = document.querySelector("#opp")
     const f = document.querySelector("#profilee")
     const fo = document.querySelector("#chg-page")
     furm.style.display = 'none'
     fo.style.display = 'none'
     fu.style.display = 'none'
     fur.style.display = 'block'
     f.style.display ='none'
}
function oppp() {
     const furm = document.querySelector("#form-page")
     const fur = document.querySelector("#sigg")
     const fu = document.querySelector("#opp")
     const f = document.querySelector("#profilee")
     const fo = document.querySelector("#chg-page")
     furm.style.display = 'none'
     fur.style.display = 'none'
     fu.style.display = 'block'
     f.style.display = 'none'
     fo.style.display = 'none'
}
function profil() {
     const furm = document.querySelector("#form-page")
     const fur = document.querySelector("#sigg")
     const fu = document.querySelector("#opp")
     const fo = document.querySelector("#chg-page")
     const f = document.querySelector("#profilee")
     furm.style.display = 'none'
     fur.style.display = 'none'
     fu.style.display = 'none'
     fo.style.display = 'none'
     f.style.display = 'block'
}
function chgpsd() {
     const furm = document.querySelector("#form-page")
     const fur = document.querySelector("#sigg")
     const fu = document.querySelector("#opp")
     const f = document.querySelector("#profilee")
     const fo = document.querySelector("#chg-page")
     furm.style.display = 'none'
     fur.style.display = 'none'
     fu.style.display = 'none'
     f.style.display = 'none'
     fo.style.display = 'block'
}

function closee() {
     const furm = document.querySelector("#form-page")
     const fur = document.querySelector("#sigg")
     const fu = document.querySelector("#opp")
     const fo = document.querySelector("#chg-page")
     const f = document.querySelector("#profilee")
     furm.style.display = 'none'
     fur.style.display = 'none'
     fu.style.display = 'none'
     f.style.display = 'none'
     fo.style.display = 'none'
}
