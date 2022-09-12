const { EmbedBuilder } = require("discord.js");

const helpEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Help Menu')
    .setDescription('All the Commands That the bot can do.')
    .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
    );

module.exports = { helpEmbed };