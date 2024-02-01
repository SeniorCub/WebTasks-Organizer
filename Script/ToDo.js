document.querySelector('.plus').addEventListener('click', add);
document.querySelector(".btnss").addEventListener("click", save);
document.querySelector(".icon").addEventListener("click", closee);

let notesss = [];
let editMode = false;
let editNoteId = null;

// Load saved notes from local storage on page load
window.onload = function() {
    if (localStorage.getItem("notes")) {
        notesss = JSON.parse(localStorage.getItem("notes"));
        displayNotes();
    }
};

function add() {
    document.querySelector('.new').style.display = 'block';
    editMode = false;
    editNoteId = null;
}

function save() {
    document.querySelector('.new').style.display = 'none';

    let title = document.querySelector('#title').value;
    let note = document.querySelector('#note').value;

    if (editMode && editNoteId !== null) {
        // Editing an existing note
        let editedNoteIndex = notesss.findIndex(note => note.id === editNoteId);
        if (editedNoteIndex !== -1) {
            notesss[editedNoteIndex].title = title;
            notesss[editedNoteIndex].note = note;

            // Update the existing note in the DOM
            let editedNoteElement = document.getElementById(`savenote${editNoteId}`);
            editedNoteElement.querySelector('.title').textContent = title + ".";
            editedNoteElement.querySelector('#content').textContent = note;
        }

        // Reset edit mode
        editMode = false;
        editNoteId = null;
    } else {
        // Adding a new note
        let noteId = notesss.length + 1;

        document.querySelector('#savednotes').innerHTML += `
            <div class="savenote" id="savenote${noteId}" >
                <div class="head">
                    <div class="title">${title}.</div>
                </div>
                <div id="content">
                    ${note}
                </div>
                <div class="hovvv">
                    <div class="icons trash" onclick="trash(${noteId})">
                        <i class="fas fa-trash-alt" style="color:#333;"></i>
                    </div>
                    <div class="icons edit" onclick="edit(${noteId})">
                        <i class="fas fa-edit" style="color:#333;"></i>
                    </div>
                </div>
            </div>
        `;

        notesss.push({ id: noteId, title, note });
    }

    // Save notes to local storage
    localStorage.setItem("notes", JSON.stringify(notesss));
    console.log(notesss);
}

function closee() {
    let newww = document.querySelector(".new");
    newww.style.display = "none";
}

function trash(noteId) {
    document.getElementById(`savenote${noteId}`).remove();
    notesss = notesss.filter(note => note.id !== noteId);

    // Update local storage after removing a note
    localStorage.setItem("notes", JSON.stringify(notesss));
    console.log(notesss);
}

function edit(noteId) {
    let noteToEdit = notesss.find(note => note.id === noteId);
    document.querySelector('#title').value = noteToEdit.title;
    document.querySelector('#note').value = noteToEdit.note;

    // Set edit mode
    editMode = true;
    editNoteId = noteId;

    document.querySelector('.new').style.display = 'block';
}

// Display existing notes on the page
function displayNotes() {
    notesss.forEach(note => {
        document.querySelector('#savednotes').innerHTML += `
            <div  class="savenote"  id="savenote${note.id}">
                <div class="head">
                    <div class="title">${note.title}.</div>
                </div>
                <div id="content">
                    ${note.note}
                </div>
                <div class="hovvv">
                    <div class="icons trash" onclick="trash(${note.id})">
                        <i class="fas fa-trash-alt" style="color:#333;"></i>
                    </div>
                    <div class="icons edit" onclick="edit(${note.id})">
                        <i class="fas fa-edit" style="color:#333;"></i>
                    </div>
                </div>
            </div>
        `;
    });
}