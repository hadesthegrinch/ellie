const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "rps",
    description: "rock, paper, scissors command",

    async execute (message, args, Discord, client){
        let embed = new MessageEmbed()
        .setTitle("Rock, Paper, Scissor")
        .setColor("#ffeda3")
        .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
        .setDescription("Wanna play Rock, Paper, and Scissor with me Bub? :>")
        .setTimestamp()

        let msg = await message.channel.send(embed)
        await msg.react("⛰")
        await msg.react("📄")
        await msg.react("✂")

        const filter = (reaction, user) => {
            return ['⛰', '📄', '✂'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices =['⛰', '📄', '✂']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max: 1, time: 60000, error: ["time"]}).then(
            async(collected) => {
                const reaction = collected.first()
                let result = new MessageEmbed()
                .setTitle("Result")
                .addField("Your Choice", `${reaction.emoji.name}`)
                .addField("Ellie's Choice", `${me}`)
                .setColor("#ffeda3")
                .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
                await msg.edit(result)

                if((me === "⛰" && reaction.emoji.name === "✂") || 
                (me === "✂" && reaction.emoji.name === "📄") || 
                (me === "📄" && reaction.emoji.name === "⛰")) {
                    message.reply("Awee, I'm sorry, Bub - you looost :<");
                } else if (me === reaction.emoji.name) {
                    return message.reply("Awe Bub, we're a tieee! :>");
                } else {
                    return message.reply("Yey Buuuuub! You woooon! :>");
                }
            })
            .catch(collected => {
                message.reply('Awe, game has been canceled Bub, you failed to respond to me :<');
            })
        

    }
}