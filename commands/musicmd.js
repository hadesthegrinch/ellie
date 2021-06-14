const Discord = require('discord.js');

module.exports = {
    name: 'musicmd',
    description: "Embed IP",
    execute(message, args, Discord, client){
        const radioOne = client.users.cache.get("159985870458322944") //mee6
        const radioTwo = client.users.cache.get("234395307759108106") //groovy
        const radioThree = client.users.cache.get("235088799074484224") //rhythm
        const radioFour = client.users.cache.get("614109280508968980") //chip
        const radioFive = client.users.cache.get("184405311681986560") //fredBoat
        const radioSix = client.users.cache.get("282859044593598464") //proBot
        const radioSeven = client.users.cache.get("547905866255433758") //hydra
        const radioEight = client.users.cache.get("537011515014774785") //Alice
        const radioNine = client.users.cache.get("239631525350604801") //Pancake
        const radioTen = client.users.cache.get("228537642583588864") //vexera


  const rtembed = new Discord.MessageEmbed()
        .setTitle("Ellie's Music BOTs' Prefixes")
        .setColor("#ffeda3")
        .setDescription("**Hi Bub!** \n\nHere are the prefixes of our Music BOTs. Make sure to use them properly :>\n\n") 
        .addFields(
        //{ name: '\u200B', value: '\u200B' },
		{ name: 'MEE6 BOT', value: `${radioOne}` + "\n > Prefix: `!` \n > To show commands, type: `bub!1bcmd`", inline: true },
        { name: 'Groovy BOT', value: `${radioTwo}` + "\n > Prefix: `/` \n > To show commands, type: `bub!2bcmd`", inline: true },
		{ name: 'Rythm BOT', value: `${radioThree}`+ "\n > Prefix: `%` \n > To show commands, type: `bub!3bcmd`", inline: true },
        { name: '\u200B', value: '\u200B' },
		{ name: 'Chip BOT', value: `${radioFour}` + "\n > Prefix: `ch!` \n > To show commands, type: `bub!4bcmd`", inline: true },
        { name: 'FredBoat♪♪ BOT', value: `${radioFive}` + "\n > Prefix: `;;` \n > To show commands, type: `bub!5bcmd`", inline: true },
        { name: 'ProBot BOT', value: `${radioSix}` + "\n > Prefix: `#` \n > To show commands, type: `bub!6bcmd`", inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'Hydra BOT', value: `${radioSeven}` + "\n > Prefix: `.` \n > To show commands, type: `bub!7bcmd`", inline: true },
        { name: 'Alice BOT', value: `${radioEight}` + "\n > Prefix: `&` \n > To show commands, type: `bub!8bcmd`", inline: true },
        { name: 'Pancake BOT', value: `${radioNine}` + "\n > Prefix: `p!` \n > To show commands, type: `bub!9bcmd`", inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'Vexera BOT', value: `${radioTen}` + "\n > Prefix: `+` \n > To show commands, type: `bub!10bcmd`", inline: true },
	)
    .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
    .setTimestamp()

        message.channel.send(rtembed);
    }
}