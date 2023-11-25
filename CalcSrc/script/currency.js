let data; // Move the data variable to a higher scope

document.addEventListener('DOMContentLoaded', function () {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = '01193e9d6dc2c519cf8b235e36d67b4d';
    const apiUrl = `https://open.er-api.com/v6/latest?apikey=${apiKey}`;

    // Make the API request using fetch
    fetch(apiUrl)
        .then(response => response.json())
        .then(apiData => {
            // Log all currency rates
            console.log(apiData.rates);
            data = apiData; // Assign the data variable
            // Update the content of the source and target currency dropdowns
            const sourceSelect = document.getElementById('source');
            const targetSelect = document.getElementById('target');

            for (const currencyCode in data.rates) {
                sourceSelect.innerHTML += `<option value="${currencyCode}">${currencyCode}</option>`;
                targetSelect.innerHTML += `<option value="${currencyCode}">${currencyCode}</option>`;
            }
        })
        .catch(error => {
            // Log an error if the fetch fails
            console.error('Error fetching exchange rates:', error);
        });
});

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const sourceCurrency = document.getElementById('source').value;
    const targetCurrency = document.getElementById('target').value;

    // Perform the conversion using the exchange rates
    const convertedAmount = amount * exchangeRate(sourceCurrency, targetCurrency);

    // Display the result
    document.getElementById('result').innerText = `Converted Amount: ${convertedAmount.toFixed(2)} ${targetCurrency}`;
}

function exchangeRate(sourceCurrency, targetCurrency) {
    // You can access the exchange rates from the API response
    // data.rates[sourceCurrency] gives the exchange rate for 1 unit of source currency
    // To convert to target currency, multiply by the exchange rate for target currency
    return data.rates[targetCurrency] / data.rates[sourceCurrency];
}