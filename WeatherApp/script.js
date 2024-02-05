// API Key
const Key = '7dc1ab100e58aa77a1655c5c439962f3';


document.addEventListener("DOMContentLoaded", () => {
               const url = `https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=metric&appid=7dc1ab100e58aa77a1655c5c439962f3
               `;
          
               fetch(url)
               .then(response => response.json())
               .then(data => {
                    const country = data.sys.country;
                    const des = data.weather[0].description;
                    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                    const temp = data.main.temp;
                    const tempmax = data.main.temp_max;
                    const tempmin = data.main.temp_min;
          
                    document.querySelector('.cityyy').innerText = `City: ${data.name}`;
                    document.querySelector('.country').innerText = `Country: ${country}`;
                    document.querySelector('.desicrip').innerText = des;
                    document.querySelector('.weathericon').innerHTML = `<img src="${icon}"/>`;
                    document.querySelector('.temp').innerText = `${temp}°C`;
                    document.querySelector('.tempmax').innerText = `${tempmax}°C`;
                    document.querySelector('.tempmin').innerText = `${tempmin}°C`;
               })
});

document.querySelector('.search').addEventListener('click',show)


function show(){
     // City Name
     const cityValue = document.querySelector('.city').value;
     if (cityValue.value === 0) {
          alert('Please enter a city name 😩');
     } else {
          function fetchWeather(city) {
               const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Key}`;
          
               fetch(url)
               .then(response => response.json())
               .then(data => {
                    const country = data.sys.country;
                    const des = data.weather[0].description;
                    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                    const temp = data.main.temp;
                    const tempmax = data.main.temp_max;
                    const tempmin = data.main.temp_min;
          
                    document.querySelector('.cityyy').innerText = `City: ${data.name}`;
                    document.querySelector('.country').innerText = `Country: ${country}`;
                    document.querySelector('.desicrip').innerText = des;
                    document.querySelector('.weathericon').innerHTML = `<img src="${icon}"/>`;
                    document.querySelector('.temp').innerText = `${temp}°C`;
                    document.querySelector('.tempmax').innerText = `${tempmax}°C`;
                    document.querySelector('.tempmin').innerText = `${tempmin}°C`;
               })
               .catch(() => {
                    alert("Please search for a valid city 😩");
               });
          }
     }
     fetchWeather(cityValue);
}