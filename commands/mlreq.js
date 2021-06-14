const { ReactionCollector } = require("discord.js");

module.exports = {
    name: 'mlreq',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '849269057874296893';
        let member = message.mentions.users.first() || message.author
        const mlEmoji = '851492675177283605';
        const Bubbies = message.guild.roles.cache.get("847912126987370517");

        var logo = [
            'https://i.pinimg.com/originals/c9/13/7e/c9137e7a2879f90e22df9fc5cd3bf85f.jpg',
            'https://contents.spin.ph/image/resize/image/2020/09/09/ml-oldlogo-1599651659.webp',
            'https://wallpapercave.com/wp/wp7834819.jpg',
            'https://mobawikiguidehome.files.wordpress.com/2018/10/amazong.jpg?w=1100',
            'https://ih1.redbubble.net/image.1332244931.4292/ur,pin_large_front,square,600x600.jpg',
        ];
        
        const mlIGN = args[0];
        const mlID = args[1];

        const embed = new Discord.MessageEmbed()
            .setColor("#ffeda3")
            .setTitle('Mobile Legends | Party Request')
            .setDescription(`${Bubbies} \n\n${member} has requested you to join him to a game :> \nReact if you want to join :>`)
                    .addFields(
                        {name: `${member.username}\'s IGN:`, value: `${mlIGN}`, inline: true},
                        {name: `${member.username}\'s ID:`, value: `${mlID}`, inline: true}
                        )
                    .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
                    .setThumbnail(logo[Math.floor(Math.random() * logo.length)])
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(mlEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                //And then where you define codEmoji change that to '850818589006233611'. Since it's the id of the emoji.
                    if(reaction.emoji.id === mlEmoji) {
                    await reaction.message.guild.members.cache.get(user.id);
                    return reaction.message.channel.send(`${user}, you have reacted to ${member.username}'s request. Please input the command shown below: \n >>> \`bub!mlid\` TypeYourIDHere mentionTheUser`);
                    
                
                } 
            } else {
                return;
            }
            
        })
    ;
 
    }
 
}   