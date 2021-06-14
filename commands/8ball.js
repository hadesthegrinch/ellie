const Discord = require('discord.js')

module.exports = {
    name: "8ball",
    description: "8ball commands",

    async execute (message, args, Discord) {
        if(!args[0]) return message.reply('Bub, you must ask a full question :(')
        let replies = ["yes bub! of course!", "absolutely bub!", "yes bub - definitely!", "Hmmm, lemme think —— of course yes!"]
        
        let results = Math.floor((Math.random() * replies.length));
        let question = args.slice().join(" ");

        let ballEmbed = new Discord.MessageEmbed()
        .setAuthor(`🎱 ${message.author.username}`)
        .setColor("#ffeda3")
        .addField("Question", question)
        .addField("Answer", replies[results])
        .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
        .setThumbnail("https://media.discordapp.net/attachments/758268686485946378/847919030790783006/bubs_edit.png?width=683&height=683")

        message.channel.send(ballEmbed)
    }
}