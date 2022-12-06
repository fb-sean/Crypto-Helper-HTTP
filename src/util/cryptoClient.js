const Cluster = require('discord-hybrid-sharding');
const { Collection } = require('discord.js');
require('dotenv').config();

module.exports = (client) => {
/* Basically loading the event loader ironic right */
  require('./eventLoader')(client);

  /* It's creating a new collection for the aliases. */
  client.commands = new Collection();
  client.talkedRecently = new Set();

  /* Logging the bot in. */
  client.start(process.env.TOKEN);
};
