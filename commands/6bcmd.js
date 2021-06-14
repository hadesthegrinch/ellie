module.exports = {
    name: '6bcmd',
    description: 'shows proBot commands',
    execute (message, args, Discord, client) {

        const radioSix = client.users.cache.get("282859044593598464") //proBot

        const rtembed = new Discord.MessageEmbed()
        .setTitle("Ellie's Music BOTs' Prefixes")
        .setColor("#ffeda3")
        .setDescription(`**Hi Bub!** \n\nHere's your request :>\n\n__ProBot BOT__ \n${radioSix}'s Commands: \n\n`
        + " >>> `#play [url / song title]` - *Add a song to queue and plays it.*"  
        + "\n `#search [song title]` - *Searches on YouTube for results to play.*"
        + "\n `#queue` - *Display the queue of the current tracks in the playlist.*"
        + "\n `#stop` - *Stop the current song and clears the entire music queue.*"
        + "\n `#vol [1 - 100]` - *Changes/Shows the current volume.*"
        + "\n `#pause` - *Pauses the currently playing track.*"
        + "\n `#np` - *Shows what is song that the bot is currently playing*"
        + "\n `#skip` - *Skip the current song.*" 
        + "\n `#repeat` - *Toggles the repeat mode.*"
        + "\n `#seek` - *Seeks to a certain point in the current track.*"
        + "\n `#24/7` - *Toggles the 24/7 mode. This makes the bot doesn't leave the voice channel until you stop it.*")

    .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
    .setTimestamp()

        message.channel.send(rtembed);
    }
}