const Discord = require('discord.js')

module.exports = {
    name: 'subscribe',
    description: "sends an embed message for subscribers",
    async execute(message, args, Discord, client) {
        const member = client.users.cache.get("847902993399283792")


        const ytEmbed = new Discord.MessageEmbed()
        .setTitle("𝗝𝘂𝗹𝗶𝗮 𝗦𝘆𝗷𝘂𝗲𝗰𝗼'𝘀 (𝗕𝘂𝗯) 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗖𝗵𝗮𝗻𝗻𝗲𝗹")
        .setColor("#ffeda3")
        .setDescription("Hi, Bubs! Please subscribe to " + `${member}'s` + " YouTube Channel!")
        .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
        .setURL("https://www.youtube.com/channel/UC1Tzxxzn5kNMa0PGDDXjHCg?sub_confirmation=1")
        //.setThumbnail("https://media.discordapp.net/attachments/758268686485946378/847919030790783006/bubs_edit.png?width=683&height=683")
        .setImage("https://media.discordapp.net/attachments/847896951692197908/848595405897859122/image0.png?width=384&height=683")

        message.channel.send(ytEmbed);

    }
}