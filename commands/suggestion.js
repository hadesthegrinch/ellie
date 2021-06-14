module.exports = {
    name: 'suggestion',
    description: "Suggests a suggestion",
    async execute(message, args, Discord, client){
        const suggestionChannel = '827513816446664714';

        const checkEmoji = '👍';
        const wrongEmoji = '👎';
        const msg = args.join(" ");

        let embed = new Discord.MessageEmbed()
        .setColor("#ffeda3")
        //.setTitle('')
        .setThumbnail("https://media.discordapp.net/attachments/758268686485946378/847919030790783006/bubs_edit.png?width=683&height=683")
        .setAuthor(`Suggestion from ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(msg)
        //.addField('', '`React to agree or disagree!`', true)
        .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
        .setTimestamp()

            let messageEmbed = await message.channel.send(embed);
            messageEmbed.react(checkEmoji);
            messageEmbed.react(wrongEmoji);
    }
}