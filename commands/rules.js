const Discord = require('discord.js')

module.exports = {
    name: 'rules',
    description: "Embed Announcement",
    execute(message, args, Discord){
       // const msg = args.join(" ");

  const rtembed = new Discord.MessageEmbed()
    .setColor("#ffeda3")
    //.setTitle("")
    //.setDescription(msg)
    .setImage("https://i.imgur.com/bOhu5Ph.png")
    //rtembed .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
    //rtembed .setAuthor(`Notifications from ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))

        message.channel.send(rtembed);
    }
}