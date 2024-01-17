// Proile Button
document.querySelector(".user").addEventListener("click",profil)
// Close Button
document.querySelector(".close").addEventListener("click",closee)
const f = document.querySelector("#profilee")

function profil() {
     f.style.display = 'block'
}
function closee() {
     f.style.display = 'none'
}