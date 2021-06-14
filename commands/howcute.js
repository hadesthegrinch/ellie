const Discord = require('discord.js')

module.exports = {
    name: "howcute",
    description: "how cute command",

    async execute(message, args, Discord, client) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const howCuteEmbed = new Discord.MessageEmbed()
        .setTitle("Cuteness Machine Calculator")
        .setColor("#ffeda3")
        .setDescription(`${member.username} is ` + rng + "% ✨✨cute✨✨")
        .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
        .setThumbnail("https://media.discordapp.net/attachments/758268686485946378/847919030790783006/bubs_edit.png?width=683&height=683")

        message.channel.send(howCuteEmbed);

    }

}