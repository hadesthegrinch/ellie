const Discord = require('discord.js')

module.exports = {
    name: "dearb",
    description: "Dear Bub command",

    async execute(message, args, Discord, client) {
        let member = message.mentions.users.first() || message.author
        const msg = args.join(" ");

        const dbEmbed = new Discord.MessageEmbed()
        .setTitle("ππ¦π’π³ ππΆπ£, ")
        .setColor("#ffeda3")
        .setDescription(msg + "\n\n `From:` " + `${member}`)
        .setFooter('All rights reserved. Β© 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
        .setThumbnail("https://media.discordapp.net/attachments/758268686485946378/847919030790783006/bubs_edit.png?width=683&height=683")

        message.channel.send(dbEmbed);

    }

}