module.exports = {
    name: 'dr',
    description: "daily reminder",
    execute(message, args, Discord){
        const msg = args.join(" ");

  const rtembed = new Discord.MessageEmbed()
    .setColor("#ffeda3")
    .setTitle("**✨ Bub's Daily Reminder ✨**")
    .setDescription(msg)
    rtembed .setThumbnail("https://media.discordapp.net/attachments/758268686485946378/847919030790783006/bubs_edit.png?width=683&height=683")
    rtembed .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
    //rtembed .setAuthor(`A reminder from ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))

        message.channel.send(rtembed);
    }
}