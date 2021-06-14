module.exports = {
    name: 'mlid',
    description: "Embed Announcement",
    execute(message, args, Discord){
        const channel = '849269057874296893';
        const playerIGN= args[0];//user's input for his IGN
        const playerID = args[1]//user's input for his ID

  const rtembed = new Discord.MessageEmbed()
    .setColor("#ffeda3")
    //.setTitle("")
    .setDescription("This is the player's info that will join your party. Please invite them :>")
    .addFields(
        {name: 'Player\'s IGN:', value: `${playerIGN}`, inline: true},
        {name: 'Player\s ID:', value: `${playerID}`, inline: true}
    )
    .setThumbnail("https://media.discordapp.net/attachments/758268686485946378/847919030790783006/bubs_edit.png?width=683&height=683")
    .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')

    message.channel.send(rtembed);
    }
}

// so if he runs the command  
// it is like !codid <<playerIGN>> <<playerID>>
//