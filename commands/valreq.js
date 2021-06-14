const { ReactionCollector } = require("discord.js");

module.exports = {
    name: 'valreq',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '849269873209245756';
        let member = message.mentions.users.first() || message.author
        const valEmoji = '851507763795591218';
        const Bubbies = message.guild.roles.cache.get("847912126987370517");

        var logo = [
            'https://i.imgur.com/k8RGnsR.mp4',
            'https://i.imgur.com/CeUGZYD.gif',
            'https://i.imgur.com/Awd3Df8.mp4',
            'https://i.imgur.com/a6Bjwc7.mp4',
            'https://i.imgur.com/KoVXuJg.gif',
            'https://i.imgur.com/WhFgI30.gif',
            'https://i.imgur.com/M9zunnM.mp4',
            'https://i.imgur.com/mPLLVer.gif',
            'https://i.imgur.com/62vb1jh.gif',
            'https://i.imgur.com/ep4mnoN.mp4',
            'https://i.imgur.com/FolBYi4.mp4',
            'https://i.imgur.com/30E3FXV.mp4',
            'https://i.imgur.com/fGNZ87S.mp4',
            'https://i.imgur.com/4Cfxx3N.gif',
            'https://i.imgur.com/5Xe09a9.gif',
        ];
        
        const valIGN = args[0];
        const valID = args[1];

        const embed = new Discord.MessageEmbed()
            .setColor("#ffeda3")
            .setTitle('Valorant | Party Request')
            .setDescription(`${Bubbies} \n\n${member} has requested you to join him to a game :> \nReact if you want to join :>`)
                    .addFields(
                        {name: `${member.username}\'s IGN:`, value: `${valIGN}`, inline: true},
                        {name: `${member.username}\'s ID:`, value: `${valID}`, inline: true}
                        )
                    .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
                    .setThumbnail(logo[Math.floor(Math.random() * logo.length)])
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(valEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                //And then where you define codEmoji change that to '850818589006233611'. Since it's the id of the emoji.
                    if(reaction.emoji.id === valEmoji) {
                    await reaction.message.guild.members.cache.get(user.id);
                    return reaction.message.channel.send(`${user}, you have reacted to ${member.username}'s request. Please input the command shown below: \n >>> \`bub!valid\` [Valorant User and Tag]`);
                    
                
                } 
            } else {
                return;
            }
            
        })
    ;
 
    }
 
}   