### A small & simple application that utilizes the [Polygon.io](https://polygon.io/) API to return the previous day's open, high, low, and close (OHLC) for a specified stock ticker. User can select up to 5 tickers from S&P 500 companies or select cryptocurrencies.


#### Tech Stack 
* Typescript
* Taildwind CSS. 

Will be adding more features as time goes on. Mainly built to familiarize myself more with Typescript. 

## Set up 

* `git clone` this repo 
* In `src/service/configs.js` replace `process.env.REACT_APP_API_KEY` with your personal API key from [Polygon.io](https://polygon.io/) & replace `process.env.REACT_APP_BASE_URL` with https://api.polygon.io/v2/

[Polygon.io API documentation](https://polygon.io/docs/stocks/getting-started)
