let neww = document.querySelector(".new")


document.querySelector('.plus').addEventListener('click', add)

function add() {
     document.querySelector('.new').style.display = 'block'
}

document.querySelector("#savednotes").addEventListener("click",()=>{
     let newww = document.querySelector(".new")
     
     // //  Finally, a ternary operator is used to toggle the display property of the "carts" element. If extended is true (i.e., the element is currently visible), the display property is set to "none", which hides the element. If extended is false (i.e., the element is currently hidden), the display property is set to "block", which makes the element visible.

     let extended = newww.style.display === "block"
     newww.style.display = extended? "none" : "block"
})