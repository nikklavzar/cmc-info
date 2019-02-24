let cmc-api = require('./cmc-api.js');
let cmc = new cmc-api('YOUR_API_KEY');

cmc.requestCoin('BTC', 'price')
	.then(data => {
		console.log(data);
	})
	.catch(error => {
		console.error(error);
	});
