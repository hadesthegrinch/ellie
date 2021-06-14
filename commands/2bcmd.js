module.exports = {
    name: '2bcmd',
    description: 'shows groovy commands',
    execute (message, args, Discord, client) {

        const radioTwo = client.users.cache.get("234395307759108106") //groovy

        const rtembed = new Discord.MessageEmbed()
        .setTitle("Ellie's Music BOTs' Prefixes")
        .setColor("#ffeda3")
        .setDescription(`**Hi Bub!** \n\nHere's your request :>\n\n__Groovy BOT__ \n${radioTwo}'s Commands: \n\n`
        + " >>> `/play` - *Loads your input and adds it to the queue; If there is no playing track, then it will start playing*"  
        + "\n `/queue` - *Displays the current song queue*"
        + "\n `/skip` - *Skips to the next song*"
        + "\n `/back` - *Skips to the previous song*"
        + "\n `/clear` - *Removes all tracks from the queue*"
        + "\n `/jump [track position or title]` - *Skips to the specified track*"
        + "\n `/loop track` - *Starts looping your currently playing track*"
        + "\n `/loop queue` - *Starts looping your current queue*" 
        + "\n `/loop off` - *Stops looping*"
        + "\n `/lyrics` - *Displays lyrics for the currently playing track*"
        + "\n `/lyrics [query]` - *Searches for lyrics based on your query*"
        + "\n `/pause` - *Pauses playback*"
        + "\n `/unpause` - *Resumes playback*"
        + "\n `/remove [track position or title]` - *Removes the specified track from the queue*"
        + "\n `/disconnect` - *Disconnects the bot from your voice channel and clears the queue*"
        + "\n `/shuffle` - *Randomizes the current order of tracks in the queue*"
        + "\n `/song [song]` - *Displays info about the specified track in the queue*"
        + "\n `/song` - *Displays info about the currently playing track*"
        + "\n `/fastforward [amount]` - *Fast forwards the player by specified amount"
        + "\n `/rewind [amount]` - *Rewinds the player by specified amount*"
        + "\n `/stop` - *Stops the currently playing track*") 

    .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
    .setTimestamp()

        message.channel.send(rtembed);
    }
}