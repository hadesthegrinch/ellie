const Discord = require('discord.js')

module.exports = {
    name: '1bcmd',
    description: 'shows mee6 commands',
    execute (message, args, Discord, client) {

        const radioOne = client.users.cache.get("159985870458322944") //mee6

        const rtembed = new Discord.MessageEmbed()
        .setTitle("Ellie's Music BOTs' Prefixes")
        .setColor("#ffeda3")
        .setDescription(`**Hi Bub!** \n\nHere's your request :>\n\n`) 
        .addFields(
        //{ name: '\u200B', value: '\u200B' },
		{ name: '__MEE6 BOT__', value: `${radioOne}` + "'s Commands: \n" 
                            + " >>> `!add` - *Add a song to the queue*"  
                            + "\n `!clear-queue` - *Remove every song from queue*"
                            + "\n `!join` - *Makes MEE6 join to your voice channel*"
                            + "\n `!leave` - *Makes MEE6 leave from your voice channel*"
                            + "\n `!np` - *Display the current playing track*"
                            + "\n `!pause` - *Pause the current playing song*"
                            + "\n `!play` - *Starts playing from the queue*"
                            + "\n `!previous` - *Plays the previous track*"
                            + "\n `!queue` - *Shows list of songs in the queue*"
                            + "\n `!replay` - *Replays the current track*"
                            + "\n `!resume` - *Resumes playing the current song*"
                            + "\n `!search` - *Searches for a song*"
                            + "\n `!seek` - *Changes the current tracks' position*"
                            + "\n `!skip` - *Skips to the next song*"
                            + "\n `!stop` - *Stops the current song*"
                            + "\n `!vote-skip` - *Starts a vote to skip to the next song*"},
        
	)
    .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
    .setTimestamp()

        message.channel.send(rtembed);
    }
}