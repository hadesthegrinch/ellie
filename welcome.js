const Discord = require('discord.js')

module.exports = client => {

    const channelID = '847895778629386270' //salutations channel
    
    client.on('guildMemberAdd', member => {
        //console.log(member)

        //const message = `Testing welcome <@${member.id}> to the server!`
        let message = new Discord.MessageEmbed()
                .setTitle("G R E E T I N G S 👋")
                .setDescription("Hi Bubbie "+ `<@${member.id}>!` + " Welcome to **SMILE FOR ME 💛 :** Bub's Discord Community slash Server.")
                .setColor("#ffeda3")
                .setImage("https://media.discordapp.net/attachments/847896951692197908/849319668175077447/DISCORD_COVER.png?width=683&height=683")
                .setFooter("All rights reserved. © 2021, carebub")

        const channel = member.guild.channels.cache.get(channelID)
        channel.send(message)
    })
}


