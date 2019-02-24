# CoinMarketCap API interface (cmc-info)
Simple API interface for [CoinMarketCap's pro API](https://pro.coinmarketcap.com/).
Requests are asynchronous and use [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). For simpler implementation, the [request-promise](https://www.npmjs.com/package/request-promise) module is used.

# Installation & use
> npm i cmc-info

How to use in your code: [see example](https://github.com/n3onis/cmc-info/blob/master/example.js).

For getting multiple values at the same time, use [options](#requestcoin-argument-options) *none* or 'quote',
this way you only need 1 API call for all values.
For getting single values, you can use my pre-made function options.
See usage below.

# API key
You can register and get a free API key [here](https://pro.coinmarketcap.com/account). There are also paid options for more advanced and commercial use.

# requestCoin argument options:
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
