const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const { helpEmbed } = require("./embeds")

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'help') {
		await interaction.reply({embeds: [helpEmbed]});
	}
});

client.login(token);