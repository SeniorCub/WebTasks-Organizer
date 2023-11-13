import CurrencyAPI from '@everapi/currencyapi-js';

const currencyApi = new CurrencyAPI('YOUR_API_KEY_GOES_HERE');
CurrencyAPI.convert({
    value: 12
}).then(response => {
    console.log(response)
});
const apiUrl = 'https://api.exchangeratesapi.io/v1/latest?access_key=01193e9d6dc2c519cf8b235e36d67b4d'

fetch(apiUrl)
.then(response => { 
     // Check if the request was successful (status code 200-299)
     if (!response.ok) {
     throw new Error(`HTTP error! Status: ${response.status}`);
     }
     
     // Parse the response as JSON
     return response.json();
})
.then(data => {
     // Handle the data from the API
     console.log(data);
})
.catch(error => {
     // Handle errors
     console.error('Fetch error:', error);
});

