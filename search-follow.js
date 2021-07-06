require('dotenv').config()
const Twit = require('twit')
const Discord = require('discord.js');
const client = new Discord.Client();


var T = new Twit({
  consumer_key:         process.env.TWITTER_CONSUMER_KEY,
  consumer_secret:      process.env.TWITTER_CONSUMER_SECRET,
  access_token:         process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})
client.login(process.env.DISCORD_TOKEN);
client.once('ready', () => {
  var stream = T.stream('statuses/filter', { track: ['#blacktechtwitter', '#codelife'], language: 'en' })

  stream.on('tweet', function (tweet) {
    //...
    var user = tweet.user;
    try {
      T.post('friendships/create', {screen_name: user.screen_name})
      console.log('Followed ' + user.screen_name)
    } catch (error) {

    }
  })
})
