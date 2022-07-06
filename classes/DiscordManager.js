'use strict';
require('dotenv').config()
const Discord = require('discord.js');
class DiscordManager extends Discord {
  constructor(options = {}) {
    super(options)
  }

  async sendMessage (tweet) {
    console.log(tweet)
    var url = "https://twitter.com/user/status/" + tweet.id;
    try {
      const channel = await this.channels.fetch(process.env.DISCORD_CHANNEL_ID)
      console.log('channel', [process.env.DISCORD_CHANNEL_ID, channel])
    } catch (error) {
      console.error(error);
    }
  }
}
