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
          options: ["7", "1", "4", "6"],
          answer: "7",
     },
     5: {
          question: "How many sides does a triangle have?",
          options: ["3", "2", "4", "5"],
          answer: "3",
     },
     6: {
          question: "What is the largest mammal?",
          options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
          answer: "Blue Whale",
     },
     7: {
          question: "Which planet is known as the Red Planet?",
          options: ["Mars", "Venus", "Jupiter", "Saturn"],
          answer: "Mars",
     },
     8: {
          question: "What is the currency of Japan?",
          options: ["Yen", "Yuan", "Won", "Ringgit"],
          answer: "Yen",
     },
     9: {
          question: "In what year did the Titanic sink?",
          options: ["1912", "1905", "1920", "1931"],
          answer: "1912",
     },
     10: {
          question: "Who painted the Mona Lisa?",
          options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
          answer: "Leonardo da Vinci",
     },
     11: {
          question: "What is the largest planet in our solar system?",
          options: ["Jupiter", "Earth", "Saturn", "Mars"],
          answer: "Jupiter",
     },
     12: {
          question: "Which country is known as the Land of the Rising Sun?",
          options: ["Japan", "China", "South Korea", "Vietnam"],
          answer: "Japan",
     },
     13: {
          question: "Who wrote 'Romeo and Juliet'?",
          options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
          answer: "William Shakespeare",
     },
     14: {
          question: "What is the largest ocean on Earth?",
          options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Southern Ocean"],
          answer: "Pacific Ocean",
     },
     15: {
          question: "Which element has the chemical symbol 'O'?",
          options: ["Oxygen", "Gold", "Iron", "Carbon"],
          answer: "Oxygen",
     },
     16: {
          question: "Who is the author of 'To Kill a Mockingbird'?",
          options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "George Orwell"],
          answer: "Harper Lee",
     },
     17: {
          question: "What is the speed of light?",
          options: ["300,000 km/s", "150,000 km/s", "200,000 km/s", "250,000 km/s"],
          answer: "300,000 km/s",
     },
     18: {
          question: "Which continent is known as the 'Dark Continent'?",
          options: ["Africa", "Asia", "South America", "Australia"],
          answer: "Africa",
     },
     19: {
          question: "Who is known as the 'Father of Computers'?",
          options: ["Charles Babbage", "Bill Gates", "Alan Turing", "Steve Jobs"],
          answer: "Charles Babbage",
     },
     20: {
          question: "What is the capital of Australia?",
          options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
          answer: "Canberra",
     },
     21: {
          question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
          options: ["Venus", "Mars", "Jupiter", "Saturn"],
          answer: "Venus",
     },
     22: {
          question: "Who developed the theory of relativity?",
          options: ["Albert Einstein", "Isaac Newton", "Stephen Hawking", "Niels Bohr"],
          answer: "Albert Einstein",
     },
     23: {
          question: "What is the smallest prime number?",
          options: ["2", "0", "1", "3"],
          answer: "2",
     },
     24: {
          question: "Which country is known as the 'Land of the Midnight Sun'?",
          options: ["Norway", "Sweden", "Finland", "Denmark"],
          answer: "Norway",
     },
     25: {
          question: "Who painted 'Starry Night'?",
          options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
          answer: "Vincent van Gogh",
     },
     26: {
          question: "What is the largest desert in the world?",
          options: ["Antarctic Desert", "Sahara Desert", "Arctic Desert", "Gobi Desert"],
          answer: "Antarctic Desert",
     },
     27: {
          question: "Who wrote '1984'?",
          options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "H.G. Wells"],
          answer: "George Orwell",
     },
     28: {
          question: "Which gas makes up the majority of Earth's atmosphere?",
          options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
          answer: "Nitrogen",
     },
     29: {
          question: "Who is the founder of Microsoft?",
          options: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
          answer: "Bill Gates",
     },
     30: {
          question: "What is the capital of Brazil?",
          options: ["Brasilia", "Rio de Janeiro", "Sao Paulo", "Salvador"],
          answer: "Brasilia",
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

