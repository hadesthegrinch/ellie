module.exports = {
    name: '9bcmd',
    description: 'shows pancake commands',
    execute (message, args, Discord, client) {

        const radioNine = client.users.cache.get("239631525350604801") //Pancake

        const rtembed = new Discord.MessageEmbed()
        .setTitle("Ellie's Music BOTs' Prefixes")
        .setColor("#ffeda3")
        .setDescription(`**Hi Bub!** \n\nHere's your request :>\n\n__Pancake BOT__ \n${radioNine}'s Commands: \n\n`
        + " >>> `p!join` - *Makes Pancake join your current voice channel.*"  
        + "\n `p!lyrics [song]` - *Search the lyrics of the song you requested.*"
        + "\n `p!move <Position before> [Position after]` - *Move the song you want from the queue around.*"
        + "\n `p!nowplaying` - *Shows the current playing song.*"
        + "\n `p!pause` - *Pauses the music playback.*"
        + "\n `p!play [song / URL]` - *Plays a song.*"
        + "\n `p!queue` - *Shows the queue.*"
        + "\n `p!remove [song name / queue position]` - *Removes a song from the queue.*" 
        + "\n `p!repeat [all / one / off]` - *Changes the repear mode of the music player.*"
        + "\n `p!resume - *Resumes music playback.*"
        + "\n `p!search [song title]` - *Searches from [Youtube](https://youtube.com) then gives a list of song to choose from.*"
        + "\n `p!seek [duration]` - *Seeks through a currently playing song.*"
        + "\n `p!shuffle` - *Shuffles the music queue*"
        + "\n `p!skip` - *Starts a vote-skip for the current song. Instantly skips if the user queued the song.*"
        + "\n `p!stop` - *Stops the music, clears the queue, and disconnects Pancake from voice channel.*")


    .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
    .setTimestamp()

        message.channel.send(rtembed);
    }
}