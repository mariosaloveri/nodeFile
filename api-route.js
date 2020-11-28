// --- api-route.js ---
// • This is an example on how a simple route should be created
// • Routes are imported on index.js file and are used to declare our simple
// API endpoints.
// -----------------------------------------------------------------------------

const express = require('express')
const router = express.Router()
const https = require('https');
const api_token = "daf607e452e4d380e0430ac33be9854288eed7b7"
const news_api_token = "204a8e6ae9884bb793b7e981d0612d80"
// • Declaring GET method
router.get('/stocks/search/:q', function (req, res) {
  var url = "https://api.tiingo.com/tiingo/utilities/search?query="+req.params.q+"&token="+api_token;
  https.get(url, (resp) => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data));
      res.json(JSON.parse(data))
    });

  }).on("error", (err) => {
      res.json("Error: " + err.message)  
  });
})

router.get('/stocks/detail/:tiker', function (req, res) {
  var url = "https://api.tiingo.com/tiingo/daily/"+req.params.tiker+"?token="+api_token;
  console.log(url)
  https.get(url, (resp) => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data));
      res.json(JSON.parse(data))
    });

  }).on("error", (err) => {
      res.json("Error: " + err.message)  
  });
})

// • Export router to use it on other modules
router.get('/stocks/market-status/:tiker', function (req, res) {
  var url = "https://api.tiingo.com/iex/?tickers="+req.params.tiker+"&token="+api_token;
  console.log(url)
  https.get(url, (resp) => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data));
      res.json(JSON.parse(data))
    });

  }).on("error", (err) => {
      res.json("Error: " + err.message)  
  });
})

// • Export router to use it on other modules
router.get('/stocks/news', function (req, res) {
  var url = "https://newsapi.org/v2/everything?apiKey="+news_api_token+"&q=app"
  console.log(url)
  https.get(url, (resp) => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data));
      res.json(JSON.parse(data))
    });

  }).on("error", (err) => {
      res.json("Error: " + err.message)  
  });
})

// • Export router to use it on other modules
router.get('/stocks/news/data/app', function (req, res) {
  var url = "https://newsapi.org/v2/everything?apiKey="+news_api_token+"&q=app"
  console.log(url)
  https.get(url, (resp) => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data));
      res.json(JSON.parse(data))
    });

  }).on("error", (err) => {
      res.json("Error: " + err.message)  
  });
})

// • Export router to use it on other modules
module.exports = router
