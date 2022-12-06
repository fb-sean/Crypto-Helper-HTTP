const { Embed } = require('interactions.js');

module.exports = {
  name: 'vote',
  description: 'Vote for me!',
  async execute(interaction, client) {
    const votemebed = new Embed()
      .setAuthor('Crypto Helper', 'https://cdn.discordapp.com/avatars/747050613656911892/f571ada569c6bf641cbd862ba77dceae.png?size=512')
      .setColor('#5865f4')
      .setTitle('Voting helps **Crypto Helper** gain more users! So make sure to vote every day!',)
      .addFields([{
        name: 'VoidBots',
        value: '> [ Click to vote ](https://voidbots.net/bot/747050613656911892/vote)',
        inline: true,
      }, {
        name: 'Botlist.me',
        value: '> [ Click to vote  ](https://botlist.me/bots/747050613656911892/vote)',
        inline: true,
      }, {
        name: 'Radar Bot Directory',
        value: '> [ Click to vote  ](https://radarbotdirectory.xyz/bot/747050613656911892/vote)',
        inline: true,
      }, {
        name: 'Flow Bots',
        value: '> [ Click to vote  ](https://www.flowbots.net/bot/747050613656911892/vote)',
        inline: true,
      }, {
        name: 'Infinity Bot List',
        value: '> [ Click to vote  ](https://infinitybots.gg/bots/747050613656911892/vote)',
        inline: true,
      }, {
        name: 'Top.gg',
        value: '> [ Click to vote  ](https://top.gg/bot/747050613656911892/vote)',
        inline: true,
      }])
      .setThumbnail('https://cdn.discordapp.com/avatars/747050613656911892/f571ada569c6bf641cbd862ba77dceae.png?size=512')
      .setFooter('Crypto Helper made by Developer Dungeon Studios');
    return interaction.reply({
      embeds: [votemebed],
    });
  },
};
