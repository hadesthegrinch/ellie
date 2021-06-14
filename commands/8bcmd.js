module.exports = {
    name: '8bcmd',
    description: 'shows hydra commands',
    execute (message, args, Discord, client) {

        const radioEight = client.users.cache.get("537011515014774785") //Alice

        const rtembed = new Discord.MessageEmbed()
        .setTitle("Ellie's Music BOTs' Prefixes")
        .setColor("#ffeda3")
        .setDescription(`**Hi Bub!** \n\nHere's your request :>\n\n__Alice BOT__ \n${radioEight}'s Commands: \n\n`
        + " >>> `&play [title or URL]` - *Plays audio*"  
        + "\n `&pause` - *Pauses current song.*"
        + "\n `&join` - *Alice will join the current voice channel you are on.*"
        + "\n `&leave` - *Disconnects Alice from channel.*"
        + "\n `&np` - *Displays currently playing track.*"
        + "\n `&rec` - *Starts / stops recording (5 minutes maximum, stops automatically when limit is reached.)*")

    .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
    .setTimestamp()

        message.channel.send(rtembed);
    }
}