const fs = require('fs');
require('dotenv').config();
const { Client, CustomStatus, getUUID } = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require('@discordjs/voice');
const client = new Client();

client.on("ready", async () => {
    console.log(`✅ ${client.user.username} Started Online`);
    client.user.setHypeSquad('HOUSE_BRILLIANCE');

    const r = client.user.setPresence({
        activities: [{
            name: 'Set Name',
            type: 'PLAYING',
            state: 'Set State',
            details: 'Set Details',
            timestamps: { start: Date.now() },
            assets: {
                largeImage: 'Link Image',
                largeText: 'Text'
            }
        }]
    });

    const channel = client.channels.cache.get("Channel Id"); // voice channel's id
    if (!channel) return console.log("The channel does not exist!");

    setInterval(() => {
        const connection = joinVoiceChannel({
            channelId: channel.id, // the voice channel's id
            guildId: channel.guild.id, // the guild that the channel is in
            adapterCreator: channel.guild.voiceAdapterCreator, // and setting the voice adapter creator
            selfDeaf: true,
            selfMute: true,
        });
    }, 6000);
});

client.login(process.env.TOKEN);
