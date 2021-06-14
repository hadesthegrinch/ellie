module.exports = {
    name: '5bcmd',
    description: 'shows fredBoat commands',
    execute (message, args, Discord, client) {

        const radioFive = client.users.cache.get("184405311681986560") //fredBoat

        const rtembed = new Discord.MessageEmbed()
        .setTitle("Ellie's Music BOTs' Prefixes")
        .setColor("#ffeda3")
        .setDescription(`**Hi Bub!** \n\nHere's your request :>\n\n__FredBoat BOT__ \n${radioFive}'s Commands: \n\n`
        + " >>> `;;play [url]` - *Play music from the given URL.*"  
        + "\n `;;play [words]` - *Search for a track on YouTube and Soundcloud.*"
        + "\n `;;queue` - *Display the queue of the current tracks in the playlist.*"
        + "\n `;;nowplaying` - *Display the currently playing track.*"
        + "\n `;;skip` - *Remove the currently playing track from the queue.*"
        + "\n `;;voteskip` - *Vote to skip the current track. Must have at least 50% of the votes.*"
        + "\n `;;stop` - *Stop the player and clear the playlist.*"
        + "\n `;;pause` - *Pause the player.*" 
        + "\n `;;resume` - *Resume the player.*"
        + "\n `;;join` - *Make FredBoat join your current voice channel.*"
        + "\n `;;leave` - *Make FredBoat leave the current voice channel.*"
        + "\n `;;repeat` - *Change the repeat mode.*"
        + "\n `;;shuffle` - *Toggle shuffle mode.*"
        + "\n `;;reshuffle` - *Reshuffle the queue.*"
        + "\n `;;fwd [time]` - *Forward the track by the given amount of time.*"
        + "\n `;;rew [time]` - *Rewind the track by the given amount of time.*"
        + "\n `;;seek [time]` - *Set the position of the track to the given time.*"
        + "\n `;;restart` - *Restart the currently playing track.*"
        + "\n `;;history` - *Show history of recently played tracks.*"
        + "\n `;;export` - *Export the current queue to Hastebin.*"
        + "\n `;;help` - *Show advanced usage of a command*")

    .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
    .setTimestamp()

        message.channel.send(rtembed);
    }
}