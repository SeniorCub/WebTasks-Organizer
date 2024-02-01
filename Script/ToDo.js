document.querySelector('.plus').addEventListener('click', add)
document.querySelector(".btnss").addEventListener("click", save)
document.querySelector(".icon").addEventListener("click", closee)
let notesss = []

function add() {
     document.querySelector('.new').style.display = 'block'
}

function save() {
     document.querySelector('.new').style.display = 'none'

     let title = document.querySelector('#title').value
     let note = document.querySelector('#note').value
    
     document.querySelector('#savednotes').innerHTML += `
          <div id="savenote">
               <div class="head">
                         <div class="title">${title}.</div>
               </div>
               <div id="content">
                    ${note}
               </div>
               <div class="hovvv">
                    <div class="icons trash" onclick="trash()">
                         <i class="fas fa-trash-alt" style="color:#333;"></i>
                    </div>
                    <div class="icons edit" onclick="edit()">
                         <i class="fas fa-edit" style="color:#333;"></i>
                    </div>
               </div>
          </div>
     `
     notesss.push({title, note})
     console.log(notesss);
}

function closee() {
     let newww = document.querySelector(".new")
     newww.style.display = "none"
}

function trash() {
     notesss.pop()
     console.log(notesss);
}

function edit() {
     document.querySelector(".new").style.display = "block"
}