module.exports = {
    name: '4bcmd',
    description: 'shows chip commands',
    execute (message, args, Discord, client) {

        const radioFour = client.users.cache.get("614109280508968980") //chip

        const rtembed = new Discord.MessageEmbed()
        .setTitle("Ellie's Music BOTs' Prefixes")
        .setColor("#ffeda3")
        .setDescription(`**Hi Bub!** \n\nHere's your request :>\n\n__Chip BOT__ \n${radioFour}'s Commands: \n\n`
        + " >>> `ch!clear` - *Clear every track from the queue.*"  
        + "\n `ch!fix` - *Fix voice issues that Chip may have (Lag, no audio, etc...)*"
        + "\n `ch!forceskip` - *Forcefully skip tracks that you don't like!*"
        + "\n `ch!loop` - *Change the loop settings on Chip, from looping one track to your entire queue.*"
        + "\n `ch!lyrics [song]` - *Shows the lyrics of a track.*"
        + "\n `ch!nowplaying` - *Displays information about the current playing track.*"
        + "\n `ch!pause` - *Pause the current playing track (Only works if the track isn't paused already!).*"
        + "\n `ch!play [song]` - *Play a track from YouTube, Spotify, SoundCloud, Vimeo, Mixer, Twitch, or bandcamp. Supports YouTube and Spotify playlists!*" 
        + "\n `ch!replay` - *Replay the current track (Does not work for livestreams!).*"
        + "\n `ch!resume` - *Resume the current track (Only works if the track is paused!).*"
        + "\n `ch!skip` - *Skip tracks that you don't like!*"
        + "\n `ch!stop` - *Stop the current player (Will make Chip clear the queue and leave the channel!).*")

    .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
    .setTimestamp()

        message.channel.send(rtembed);
    }
}