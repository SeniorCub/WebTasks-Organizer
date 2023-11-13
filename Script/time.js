function updateTime() {
     var d = new Date();

     document.getElementById("hour").innerHTML = d.getHours();
     document.getElementById("min").innerHTML = d.getMinutes();
     document.getElementById("sec").innerHTML = d.getSeconds();

     var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     document.getElementById("days").innerHTML = days[d.getDay()];
     document.getElementById("day").innerHTML = d.getDate();
     var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     document.getElementById("month").innerHTML = months[d.getMonth()];
     document.getElementById("year").innerHTML = d.getFullYear();
}
     // Initial update
     updateTime();

     // Refresh time every 1 second (1000 milliseconds)
     setInterval(updateTime, 1000);

let analog = document.querySelector(".analog").addEventListener("click", moveToAnalog)
let digital = document.querySelector(".digital").addEventListener("click", moveToDigital)

function moveToDigital() {
     document.querySelector(".outer-analog-container").style.display = 'none'
     document.querySelector(".timee").style.display = 'block'
     document.querySelector(".digital").classList.add("active")
     document.querySelector(".analog").classList.remove("active")
}
function moveToAnalog() {
     document.querySelector(".timee").style.display = 'none'
     document.querySelector(".outer-analog-container").style.display = 'block'
     document.querySelector(".analog").classList.add("active")
     document.querySelector(".digital").classList.remove("active")
}