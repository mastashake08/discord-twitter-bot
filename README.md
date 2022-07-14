[![Patreon donate button](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/mastashake08)
[![npm](https://img.shields.io/npm/v/buttplug.svg)](https://npmjs.com/package/discord-twitter-bot)
[![Discord](https://img.shields.io/badge/Discord-Join%20My%20Server-blue)](https://discord.gg/DMbMmQvvQh)
[![CodeLife](https://img.shields.io/badge/Code%20Life-Join%20The%20Team-brightgreen)](https://bit.ly/30vZro9)

# Discord Twitter Bot

A discord bot that sends messages to a channel whenever a specific user tweets using the Twitter Streaming API. Uses the Twit and Discord.js NPM packages


## Table Of Contents

- [Support The Project](#support)
- [Installation](#installation)

- [Usage Example](#usage)
- [Contributing](#contributing)
- [License](#license)

## Support
Join my Masta Coders Discord server and come join a community of coders, investors and thinkers come join!
[![CodeLife Join button](https://i.imgur.com/407brBK.png)](https://discord.gg/DMbMmQvvQh)

[You can also support me  via Patreon](http://patreon.com/qdot)!
Every donation helps us afford more time to create projects and classes for underserved youth!

## Installation

Use the package manager [npm](https://npmjs.org) to install the dependencies. Then copy the example .env file and fill in with appropriate values.

```bash
 git clone https://github.com/mastashake08/discord-twitter-bot.git
 npm install
 cp .env.example .env
 #set values for TWITTER and DISCORD APIs in .env
 TWITTER_USER_NAME=
 DISCORD_TOKEN=
 DISCORD_CHANNEL_ID=
 BEARER_TOKEN=
 CHANNEL_MESSAGE=



```

## Usage

```bash
node main.js
```
### Docker

```bash
# On linux/amd64 architechture
docker run --platform linux/amd64 --env-file=<PATH TO .ENV> -d --name=<NAME> mastashake08/discord-twitter-bot

docker run  --env-file=<PATH TO .ENV> -d --name=<NAME> mastashake08/discord-twitter-bot:latest
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[ISC](https://choosealicense.com/licenses/isc/)
