module.exports = {
    name: '3bcmd',
    description: 'shows rythm commands',
    execute (message, args, Discord, client) {

        const radioThree = client.users.cache.get("235088799074484224") //rhythm

        const rtembed = new Discord.MessageEmbed()
        .setTitle("Ellie's Music BOTs' Prefixes")
        .setColor("#ffeda3")
        .setDescription(`**Hi Bub!** \n\nHere's your request :>\n\n__Rythm BOT__ \n${radioThree}'s Commands: \n\n`
        + " >>> `%join or summon` - *Summons the bot to the voice channel you are in*"  
        + "\n `%play or p` - *Plays a song with the given name or url*"
        + "\n `%playtop` - *Adds a song with the given name/url on the top of the queue*"
        + "\n `%playskip` - *Skips the current song and plays the song you requested*"
        + "\n `%search` - *Searches from [Youtube](https://youtube.com) for a song via your query and returns the top 10 results*"
        + "\n `%soundcloud` - *Plays a song from [SoundCloud](https://soundcloud.com) with the given name/url*"
        + "\n `%nowplaying` - *Shows what song Rythm is currently playing.*"
        + "\n `%grab` - *Saves the current playing song to your Direct Messages*" 
        + "\n `%seek` - *Seeks to a certain point in the current track*"
        + "\n `%rewind` - *Rewinds by a certain amount of time in the current track*"
        + "\n `%forward` - *Forwards by a certain amount of time in the current track*"
        + "\n `%replay` - *Resets the progress of the current song*"
        + "\n `%loop` - *Toggles looping for the current playing song*"
        + "\n `%voteskip` - *Votes to skip the current playing song*"
        + "\n `%forceskip` - *Skips the current playing song immediately*"
        + "\n `%pause` - *Pauses the current playing track*"
        + "\n `%resume` - *Resumes paused music*"
        + "\n `%lyrics` - *Gets the lyrics of the current playing song*"
        + "\n `%disconnect` - *Disconnects the bot from the voice channel it is in"
        + "\n `%queue` - *Shows the first page of the queue*")

    .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
    .setTimestamp()

        message.channel.send(rtembed);
    }
}