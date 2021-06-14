const discord = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return

    const bub = '<:bub:847915097330155602>';
    const tiktok = '<:tiktok:849359755704270948>';
    const youtube = '<:youtube:849360030952194050>';
    const podcast = '<:podcast:849363426600812564>';
    const c2 = '<:c2:850798038069805057>';

    const embed = new discord.MessageEmbed
    .setColor("#ffeda3")
            .setTitle('Reaction Roles')
            .setDescription('React to the respective emojis below to get the specific roles!\n\n'
                        + `React "${bub}" to get your **certified Bubbies** role!\n`
                        + `React "${c2}" to get your **C2 Gang** role!\n`
                        + `React "${tiktok}" to get your **Bub's TikTok Follower** role!\n`
                        + `React "${youtube}" to get your **Bub's YouTube Subscriber** role!\n`
                        + `React "${podcast}" to get your **Bub's Podcast Listener** role!\n`)
                        .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg');

    const add = new MessageButton()
    .setStyle("green")
    .setLabel("Add")
    .setID("AddXRole")
    .setEmoji(bub)


    const remove = new MessageButton()
    .setStyle("gray")
    .setLabel("Remove")
    .setID("RemoveXRole")
    .setEmoji("❌")

    const row = new MessageActionRow()
    .addComponent([add, remove])

    message.channel.send({component: row})

}

module.exports.help = {
    name: 'rr',
    aliases: []
}