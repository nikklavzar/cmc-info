let cmc = new(require('./cmc-api.js'));

cmc.requestCoin('BTC', 'price')
	.then(data => {
		console.log(data);
	})
	.catch(error => {
		console.error(error);
	});