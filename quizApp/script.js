let questions = {
     1: {
          question: "What is the capital of France?",
          options: ["Paris", "New York", "London",  "Dublin"],
          answer: "Paris",
     },
     2: {
          question: "Who is CEO of Tesla?",
          options: ["Elon Musk", "Jeff Bezos",  "Bill Gates", "Tony Stark"],
          answer: "Elon Musk",
     },
     3: {
          question: "The iPhone was created by which company?",
          options: ["Apple", "Intel", "Amazon", "Microsoft"],
          answer: "Apple",
     },
     4: {
          question: "How many Harry Potter books are there?",
          options: [ "7", "1", "4", "6"],
          answer: "7",
     },
     5: {
          question: "How many sides does a triangle have?",
          options: ["3", "2", "4", "5"],
          answer: "3",
     },
}

const question = document.querySelector("#quizQuestion");
const option1 = document.querySelector("#option1Label");
const option2 = document.querySelector("#option2Label");
const option3 = document.querySelector("#option3Label");
const option4 = document.querySelector("#option4Label");
const time =  document.querySelector('#time');
const score = document.querySelector('#score');
const questionNumber = document.querySelector('#questionNumber');
const totalNumber = document.querySelector('#totalNumber');
const progressBar = document.querySelector('#progress');
const nextButton = document.querySelector('#next');
const result = document.querySelector('#submit');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const displayy = document.querySelector('.display');
const answer = document.querySelector('.answer');
var audio = document.getElementById("myAudio");

let scor = 0;


document.addEventListener("DOMContentLoaded", () => {
     document.querySelector('#start').addEventListener('click', start);
     displayy.innerText = 'Click the start button to start the game';
     radioButtons.forEach((radioButton) => {
          radioButton.checked = false;
     })
     audio.src = "./audio/mixkit-greeting-music-box-tone-699.wav";
})

function start() {
     question.innerText = questions[1].question;
     option1.innerText = questions[1].options[0];
     option2.innerText = questions[1].options[1];
     option3.innerText = questions[1].options[2];
     option4.innerText = questions[1].options[3];
     questionNumber.innerText = 1;
     time.innerText = 25;
     score.innerText = 0;
     totalNumber.innerText = Object.keys(questions).length;
     progressBar.style.width = `${(1/Object.keys(questions).length)*100}%`;
     displayy.innerText = 'The Game Has Started';
     document.querySelector('.start').style.display = 'none';
     let timer = 25;
     let interval = setInterval(() => {
          timer--;
          time.innerText = timer;
          if (timer == 0) {
               clearInterval(interval);
               alert(`Time is up.
Your score is ${scor}`);
               window.location.reload();
          } else if (timer < 10) {
               time.style.color = 'red';
               audio.src = "./audio/mixkit-classic-short-alarm-993.wav";
          } else {
               time.style.color = 'black';
          }
     }, 1000);
     audio.src = "./audio/mixkit-game-level-music-689.wav";
}
nextButton.addEventListener('click', () => {
     if (answer.checked) {
          scor += 20;
          score.innerText = scor;
          let currentQuestion = parseInt(questionNumber.innerText);
          if (currentQuestion < Object.keys(questions).length) {
               currentQuestion++;
               question.innerText = questions[currentQuestion].question;
               option1.innerText = questions[currentQuestion].options[0];
               option2.innerText = questions[currentQuestion].options[1];
               option3.innerText = questions[currentQuestion].options[2];
               option4.innerText = questions[currentQuestion].options[3];
               questionNumber.innerText = currentQuestion;
               progressBar.style.width = `${(currentQuestion/Object.keys(questions).length)*100}%`;
               radioButtons.forEach((radioButton) => {
                    radioButton.checked = false;
               })
          }else {
               alert('No more questions Submit your answers');
               nextButton.style.display = 'none';
          }
     } else if (radioButtons[0].checked || radioButtons[1].checked || radioButtons[2].checked || radioButtons[3].checked) {
          let currentQuestion = parseInt(questionNumber.innerText);
          if (currentQuestion < Object.keys(questions).length) {
               currentQuestion++;
               question.innerText = questions[currentQuestion].question;
               option1.innerText = questions[currentQuestion].options[0];
               option2.innerText = questions[currentQuestion].options[1];
               option3.innerText = questions[currentQuestion].options[2];
               option4.innerText = questions[currentQuestion].options[3];
               questionNumber.innerText = currentQuestion;
               progressBar.style.width = `${(currentQuestion/Object.keys(questions).length)*100}%`;
               radioButtons.forEach((radioButton) => {
                    radioButton.checked = false;
               })
          }else {
               alert('No more questions Submit your answers');
               nextButton.style.display = 'none';
          }   
     } else {
          alert('Please select an option');
     }
})

result.addEventListener('click', () => {
     if (answer.checked) {
          scor += 20;
          score.innerText = scor;
          if (scor == 80 || scor == 100 || scor == 120) {
               if (scor == 120) {
                    scor = 100;
               }
               audio.src = "./audio/mixkit-church-moderate-applause-499.wav";
               alert(`Your score is ${scor}. You are a genius`);
               window.location.reload();
          } else if (scor === 40 || scor === 60){
               audio.src = "./audio/mixkit-light-applause-with-laughter-audience-512.wav";
               alert(`Your score is ${scor}. You are a little bit smart`);
               window.location.reload();
          } else {
               audio.src = "./audio/mixkit-cartoon-failure-piano-473.wav";
               alert(`Your score is ${scor}. You are Dumb`);
               window.location.reload();
          }
     } else {
          audio.src = "./audio/mixkit-cartoon-failure-piano-473.wav";
          score.innerText = scor;
          alert(`Your score is ${scor}. You are Dumb`);
          window.location.reload();
     }
})

