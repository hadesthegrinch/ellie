module.exports = {
    name: '7bcmd',
    description: 'shows hydra commands',
    execute (message, args, Discord, client) {

        const radioSeven = client.users.cache.get("547905866255433758") //hydra

        const rtembed = new Discord.MessageEmbed()
        .setTitle("Ellie's Music BOTs' Prefixes")
        .setColor("#ffeda3")
        .setDescription(`**Hi Bub!** \n\nHere's your request :>\n\n__Hydra BOT__ \n${radioSeven}'s Commands: \n\n`
        + " >>> `.lyrics` - *Shows lyrics for the currently playing song.*"  
        + "\n `.lyrics [song title]` - *Shows lyrics for the provided song.*"
        + "\n `.play [song name/url]` - *Display the queue of the current tracks in the playlist.*"
        + "\n `.queue` - *Shows the queue.*"
        + "\n `.leave` - *Disconnects from channel.*"
        + "\n `.search [song name]` - *Searches and lets you choose a song.*"
        + "\n `.voteskip` - *Lets you vote for skipping the current track.*")

    .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
    .setTimestamp()

        message.channel.send(rtembed);
    }
}