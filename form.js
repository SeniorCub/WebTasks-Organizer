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
const backkkk = document.querySelector(".backkkk").addEventListener("click",profil)
const bbbt = document.querySelector(".bbbt").addEventListener("click",profil)
// Change password button
const chgps = document.querySelector(".chgpsd").addEventListener("click",chgpsd)
// Close Button
const close = document.querySelectorAll(".close")
for (let i = 0; i < close.length; i++) {
     close[i].addEventListener("click",closee)
}


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

// For Sign Up
document.querySelector(".next1").addEventListener("click",next1)
document.querySelector(".next2").addEventListener("click",next2)
document.querySelector(".back2").addEventListener("click",back2)
document.querySelector(".back3").addEventListener("click",next1)
document.querySelector(".next3").addEventListener("click",profil)

function next1() {
     const form1 = document.querySelector('.form1')
     const form2 = document.querySelector('.form2')
     const form3 = document.querySelector('.form3')
     const line2 =document.querySelector('.line2')
     line2.style.display = 'block'
     form1.style.left = '-110%'
     form2.style.left = '30%'
     form3.style.left = '110%'
}
function next2() {
     const form1 = document.querySelector('.form1')
     const form2 = document.querySelector('.form2')
     const form3 = document.querySelector('.form3')
     const line3 =document.querySelector('.line3')
     line3.style.display = 'block'
     form1.style.left = '-160%'
     form2.style.left = '-110%'
     form3.style.left = '30%'
}
function back2() {
     const form1 = document.querySelector('.form1')
     const form2 = document.querySelector('.form2')
     const form3 = document.querySelector('.form3')
     const line1 =document.querySelector('.line1')
     line1.style.display = 'block'
     form1.style.left = '10%'
     form2.style.left = '110%'
     form3.style.left = '160%'
}

// Sign In
document.querySelector(".login").addEventListener("click",profil)

// Change Password
document.querySelector(".back222").addEventListener("click",back222)
document.querySelector(".getcode").addEventListener("click",getcode)
document.querySelector(".verify").addEventListener("click",verify)
document.querySelector(".back333").addEventListener("click",back333)
document.querySelector(".chan333").addEventListener("click",chan333)
document.querySelector(".forpsd").addEventListener("click",forpsd)
document.querySelector(".back444").addEventListener("click",back444)
document.querySelector(".chan444").addEventListener("click",chan444)

function back222() {
     const form111 = document.querySelector('.form111')
     const form222 = document.querySelector('.form222')
     const form333 = document.querySelector('.form333')
     const line1 =document.querySelector('.line111')
     line1.style.display = 'block'
     form111.style.left = '30%'
     form222.style.left = '110%'
     form333.style.left = '160%'
}
function getcode() {
     const form111 = document.querySelector('.form111')
     const form222 = document.querySelector('.form222')
     const form333 = document.querySelector('.form333')
     const line2 =document.querySelector('.line222')
     line2.style.display = 'block'
     form111.style.left = '-110%'
     form222.style.left = '30%'
     form333.style.left = '110%'
}
function verify() {
     const form111 = document.querySelector('.form111')
     const form222 = document.querySelector('.form222')
     const form333 = document.querySelector('.form333')
     const line3 =document.querySelector('.line333')
     line3.style.display = 'block'
     form111.style.left = '-160%'
     form222.style.left = '-110%'
     form333.style.left = '30%'
}
function back333() {
     const form111 = document.querySelector('.form111')
     const form222 = document.querySelector('.form222')
     const form333 = document.querySelector('.form333')
     const line2 =document.querySelector('.line222')
     line2.style.display = 'block'
     form111.style.left = '-110%'
     form222.style.left = '30%'
     form333.style.left = '160%'
}
function chan333() {
     profil()
}
function forpsd() {
     const form333 = document.querySelector('.form333')
     const form3334 = document.querySelector('.form3334')
     form333.style.display = 'none'
     form3334.style.display = 'block'
}
function back444() {
     const form333 = document.querySelector('.form333')
     const form3334 = document.querySelector('.form3334')
     form333.style.display = 'block'
     form3334.style.display = 'none'
}
function chan444() {
     profil()
}