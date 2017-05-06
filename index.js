require('dotenv').config();

var Twit = require('twit');

var bot = new Twit({
  consumer_key: process.env.LEARNING_BOT_API_KEY,
  consumer_secret: process.env.LEARNING_BOT_API_SECRET,
  access_token: process.env.LEARNING_BOT_ACCESS_TOKEN,
  access_token_secret: process.env.LEARNING_BOT_ACCESS_TOKEN_SECRET,
  timeout_ms: 60*1000
});

function updateStatus(status) {
  bot.post('statuses/update', {
    status: status
  }, function(err, data, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(data.text + 'was tweeted.');
    }
  });
}

updateStatus('Hello, world! This is posted by bot!!!');