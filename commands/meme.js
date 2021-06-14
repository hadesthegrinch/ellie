const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "meme",
    description: "meme command, sends meme",

    async execute (message, args, Discord, client) {
        const subReddits = ["dankmeme", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)
        
        const embed = new Discord.MessageEmbed()
        .setColor("#ffeda3")
        .setImage(img)
        .setTitle(`Hey Bub! Looking for a meme? Here you go: r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
        .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')

        message.channel.send(embed)
    }
}