module.exports = {
    name: 'cmds',
    description: 'shows vexera commands',
    execute (message, args, Discord, client) {

        const Bubbies = message.guild.roles.cache.get("847912126987370517");


        const rtembed = new Discord.MessageEmbed()
        .setTitle("Games Commands:")
        .setColor("#ffeda3")
        .setDescription("This is the list of game commands that " + `${Bubbies}` + " can use:")
        .addFields(
            {name: 'Rock, Paper, Scissors: ', value: ' >>> Command: `bub!rps`', inline: true},
            {name: 'Tic-tac-toe: ', value: ' >>> Command: `bub!tictactoe [mention a user to play]`', inline: true},
            { name: '\u200B', value: '\u200B', inline: false },
            { name: '**__Game Requests Commands:__**', value: '\u200B', inline: false },
            { name: 'Call of Duty Party Request: ', value: ' >>> Command: `bub!codreq [IGN] [ID]`', inline: true },
            { name: 'Mobile Legends Party Request: ', value: ' >>> Command: `bub!mlreq [IGN] [ID]`', inline: true },
            { name: 'Valorant Party Request: ', value: ' >>> Command: `bub!valreq [IGN] [ID]`', inline: true },
            
        )


    .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
    .setTimestamp()

        message.channel.send(rtembed);
    }
}
