const axios = require('axios');

const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAACYVpQEAAAAAoLOXsbWkix5LmbuYA3%2BK8S%2BJm7A%3DXIf697yIoEa6xHXFIIIMnEdAhlXZ4oSAqs7fv0nPKoNQiM76HZ'; // Your Twitter Bearer Token
const username = 'BotmanSolana'; // The username of the account
const url = `https://api.twitter.com/2/tweets/search/recent?query=from:${username}&max_results=1`;

axios.get(url, {
  headers: {
    "Authorization": `Bearer ${BEARER_TOKEN}`
  }
})
.then(response => {
  if (response.data && response.data.data && response.data.data.length > 0) {
    const latestTweet = response.data.data[0];
    console.log('Latest tweet:', latestTweet.text);
  } else {
    console.log('No tweets found.');
  }
})
.catch(error => {
  console.error('Error fetching tweet:', error);
});
