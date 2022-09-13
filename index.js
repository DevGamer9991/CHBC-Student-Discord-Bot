const { Client, GatewayIntentBits } = require('discord.js');
const { token, access_token, pageId, announcementChannel } = require('./config.json');
const { helpEmbed } = require("./embeds")

var FB = require('facebook-node');
FB.setAccessToken(access_token);


// Main Facebook loop
var liveVideo;

// const mainLoop = async () => {
// 	await FB.api(`${pageId}/live_videos?limit=1`, function (res) {
// 		console.log(res)
// 		const video = res.data[0];

// 		if (liveVideo === video.id) return;

// 		if (video.status === "VOD") {
// 			client.channels.cache.get(announcementChannel).send("Live! " + video.id);
// 			liveVideo = video.id;
// 		}
// 	});

// 	setTimeout(() => mainLoop(), 5000)
// }



const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'help') {
		await interaction.reply({embeds: [helpEmbed]});
	} else if (commandName === "test") {
		await client.channels.cache.get(announcementChannel).send("Test")
		await interaction.reply("message Sent")
	}
});

client.login(token);