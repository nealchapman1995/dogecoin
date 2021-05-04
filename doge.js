const requestURL = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=EUR&apikey=MVMWO22EOEPQ8MVE"

function makeRequest(requestURL){
	fetch(requestURL)
	.then(response => response.json())
	console.log(response.json);
}
