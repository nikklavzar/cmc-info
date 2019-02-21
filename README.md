# cmc-info
CoinMarketCap API
> npm i cmc-info

How to use in your code:
```
let cmc = new(require('./cmc-api.js'));

cmc.requestCoin('BTC', '_option_') // replace _option_
	.then(data => {
		// use your data here
		console.log(data);
	})
	.catch(error => {
		// do whatever with errors here
		console.error(error);
	});
```

For getting multiple values at the same time, use options *none* or 'quote',
this way you only need 1 API call for all values.
For getting single values, you can use my pre-made function options.
See usage below.

requestCoin options:
  - *none*
  ```
 { 
		id: 1,
		name: 'Bitcoin',
		symbol: 'BTC',
		slug: 'bitcoin',
		circulating_supply: 17548650,
		total_supply: 17548650,
		max_supply: 21000000,
		date_added: '2013-04-28T00:00:00.000Z',
		num_market_pairs: 6643,
		tags: [ 'mineable' ],
		platform: null,
		cmc_rank: 1,
		last_updated: '2019-02-20T14:25:27.000Z',
		quote:
			{ USD:
				{ 	price: 3967.45596071,
					volume_24h: 8870574483.8468,
					percent_change_1h: -0.558352,
					percent_change_24h: -0.290679,
					percent_change_7d: 9.24773,
					market_cap: 69623496044.91354,
					last_updated: '2019-02-20T14:25:27.000Z'
				}
			} 
 }
```
		
  - quote
```
 { 
		price: 3968.8811105,
		volume_24h: 8872096540.73199,
		percent_change_1h: -0.522632,
		percent_change_24h: -0.254862,
		percent_change_7d: 9.28697,
		market_cap: 69648505499.77582,
		last_updated: '2019-02-20T14:24:26.000Z'
 }
```
  - id
  - name
  - symbol
  - slug
  - circulating_supply
  - total_supply
  - max_supply
  - date_added
  - num_market_pairs
  - tags
  - platform
  - cmc_rank
  - last_updated
  - price
  - volume_24h
  - percent_change_1h
  - percent_change_24h
  - percent_change_7d
  - market_cap
